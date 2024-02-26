/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import axios from "axios";
import { useState } from "react";
import useRazorpay from "react-razorpay";
import { useRouter } from "next/navigation";
import logo from "../../../public/favicon.png";

function page() {
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [Razorpay] = useRazorpay();
    const router = useRouter();
    function handleImageChange(event) {
        const file = event.target.files[0];
        const fileReader = new FileReader();
        fileReader.onload = () => {
            if (fileReader.result.length < 102400) {
                setError("");
                setImage(fileReader.result);
            } else {
                setError("Max Image Size is 100KB");
                document.querySelector("#studentIdImage").value = "";
                setTimeout(() => {
                    setError("");
                }, 2000);
            }
        };
        fileReader.readAsDataURL(file);
    }
    function setPaymentFailed(id) {
        setLoading("Payment Failed");
        setTimeout(async () => {
            setLoading("Deleting Ticket");
            await axios.delete(
                process.env.NEXT_PUBLIC_BACKEND_URL + `/payments/${id}`,
            );
            setLoading("");
        }, 1000);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setSubmitted(true);
        if (!image) {
            return setTimeout(() => setSubmitted(false), 2000);
        }
        setSubmitted(false);
        setLoading("Generating Ticket");
        const formData = {
            name: event.target.name.value,
            email: event.target.email.value,
            contact: event.target.contact.value,
            studentIdImage: image,
            studentId: event.target.studentId.value,
        };
        let error = false;
        const response = await axios
            .post(process.env.NEXT_PUBLIC_BACKEND_URL + "/payments", formData)
            .catch((err) => {
                alert(err.message);
                error = true;
                return err;
            });
        if (!error) {
            setLoading("Loading Payment Portal");
            const id = response.data.id;
            const orderId = response.data.orderId;
            const options = {
                key: process.env.NEXT_PUBLIC_RAZOR_PAY_KEY, // Enter the Key ID generated from the Dashboard
                amount: process.env.NEXT_PUBLIC_TICKET_AMOUNT, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                currency: "INR",
                name: "Anhad 2024",
                description: "Anhad Ticket Booking Portal",
                image: logo.url,
                order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
                handler: async function (response) {
                    setLoading("Verifying Payment");
                    const res = await axios
                        .patch(
                            process.env.NEXT_PUBLIC_BACKEND_URL + "/payments",
                            response,
                        )
                        .catch((err) => {
                            setLoading("Verification Failed");
                            setTimeout(() => {
                                setLoading("");
                            }, 1000);
                            console.log(err);
                        });
                    setLoading("Loading Ticket");
                    router.push(`/ticket/${response.razorpay_payment_id}`);
                    setTimeout(() => {
                        setLoading("");
                    }, 1000);
                },
                prefill: {
                    name: formData.name,
                    email: formData.email,
                    contact: formData.contact,
                },
                theme: {
                    color: "#3399cc",
                },
                modal: {
                    ondismiss: () => setPaymentFailed(id),
                },
            };

            const rzp1 = new Razorpay(options);
            rzp1.on("payment.failed", () => setPaymentFailed(id));
            rzp1.on("payment.window.closed", function () {
                console.log("Razorpay window closed");
            });
            setLoading("Waiting for Payment");
            rzp1.open();
        } else {
            setLoading("Failed to Generate Ticket");
            setTimeout(() => {
                setLoading("");
            }, 1000);
        }
    }
    return (
        <div className="p-4 mt-12 w-full flex flex-wrap justify-center font-mono">
            <form
                onSubmit={handleSubmit}
                className="xl:w-1/3 md:w-1/2 w-full bg-white bg-opacity-20 rounded-lg p-8 flex flex-row flex-wrap justify-center"
            >
                <div className="w-full text-xl mb-4">Book a ticket</div>
                <input
                    className="focus:w-5/6 w-4/5 p-2 border-b border-pink-700 bg-transparent z-10 outline-none transition-all duration-300 mt-2 mb-2"
                    placeholder="Name"
                    name="name"
                    required
                />
                <input
                    className="focus:w-5/6 w-4/5 p-2 border-b border-pink-700 bg-transparent z-10 outline-none transition-all duration-300 mt-2 mb-2"
                    placeholder="Student ID"
                    name="studentId"
                    required
                    type="text"
                />
                <input
                    className="focus:w-5/6 w-4/5 p-2 border-b border-pink-700 bg-transparent z-10 outline-none transition-all duration-300 mt-2 mb-2"
                    placeholder="Email"
                    name="email"
                    required
                    type="email"
                />
                <input
                    className="focus:w-5/6 w-4/5 p-2 border-b border-pink-700 bg-transparent z-10 outline-none transition-all duration-300 mt-2 mb-2"
                    placeholder="Contact No."
                    name="contact"
                    required
                    type="tel"
                />
                <div className="w-4/5 z-10 mt-6 mb-4 flex flex-wrap">
                    <label
                        className={`cursor-pointer hover:bg-opacity-15 transition-all duration-300 p-2 pr-4 pl-4 bg-opacity-25 rounded ${
                            (!image && submitted) || error
                                ? "bg-red-300 hover:bg-red-400"
                                : "bg-white hover:bg-pink-100"
                        }`}
                        htmlFor="studentIdImage"
                    >
                        {error
                            ? error
                            : !image
                            ? submitted
                                ? "Required"
                                : "Upload Student ID"
                            : "Change Student ID"}
                    </label>
                    {image && (
                        <div className="w-full flex justify-center flex-wrap mt-4">
                            <span
                                className="w-full flex justify-end h-64 p-2"
                                style={{
                                    backgroundImage: `url(${image})`,
                                    backgroundSize: "contain",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                            >
                                <div
                                    className="bg-white bg-opacity-20 rounded-full p-2 pr-4 pl-4 absolute cursor-pointer"
                                    onClick={() => {
                                        setImage("");
                                        document.querySelector(
                                            "#studentIdImage",
                                        ).value = "";
                                    }}
                                >
                                    X
                                </div>
                            </span>
                        </div>
                    )}
                    <span className="text-xs w-full mt-4">
                        ** Please upload a student ID, or your ticket will be
                        cancelled and no funds will be refunded.
                    </span>
                </div>
                <input
                    onChange={handleImageChange}
                    id="studentIdImage"
                    className="hidden"
                    placeholder="Student ID"
                    name="studentIdImage"
                    type="file"
                    accept="image/*"
                />
                <div className="w-full flex justify-end mt-4 mb-8 z-10">
                    <input
                        disabled={loading != ""}
                        value={loading ? loading : "Book Now"}
                        className="p-2 pr-16 pl-16 bg-white bg-opacity-20 rounded hover:bg-opacity-30 cursor-pointer"
                        type="submit"
                    />
                </div>
            </form>
        </div>
    );
}

export default page;
