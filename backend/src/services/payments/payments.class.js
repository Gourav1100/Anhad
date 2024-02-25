/* eslint-disable no-unused-vars */
const { Service } = require("feathers-sequelize");
const Razorpay = require("razorpay");
const moment = require("moment");
const rzp_key_id = "rzp_test_WDb6DFQhixarEj";
const rzp_key_secret = "fUUWcbMHsxkn0A4V86YBhIaV";
const api_password = "peppermint_";

exports.Payments = class Payments extends Service {
    async create(data, params) {
        const { name, contact, email, studentIdImage, studentId } = data;
        const amount = 50000;

        if (!name || !contact || !email || !studentIdImage || !studentId) {
            throw new Error(
                "Missing required fields: name, contact, email, studentIdImage or student",
            );
        }

        var instance = new Razorpay({
            key_id: rzp_key_id,
            key_secret: rzp_key_secret,
        });

        var options = {
            amount: amount, // amount in the smallest currency unit
            currency: "INR",
            receipt: email,
        };

        const orderId = (await instance.orders.create(options)).id; // Await the order creation
        if (!orderId) {
            throw new Error("Failed to create order. Please try again later.");
        }

        const paymentStatus = false;
        const paymentData = {
            orderId,
            amount,
            name,
            email,
            contact,
            paymentStatus,
            studentIdImage,
            studentId,
        };

        try {
            await super.create(paymentData, params); // Save payment data
            return {
                orderId,
            };
        } catch (error) {
            throw new Error(`Failed to create payment: ${error.message}`);
        }
    }

    async patch(id, data, params) {
        if (data.checkIn) {
            console.log(data);
            if (data.pass !== api_password + new Date().getDate().toString()) {
                return {
                    code: 401,
                    message: "Unauthorized Access Attempt",
                };
            }
            let fetchedData = await super.find(params);
            fetchedData = fetchedData.data[0];
            const lastCheckIn = fetchedData.lastCheckIn;
            const today = new Date().toISOString().slice(0, 10);
            if (
                lastCheckIn == null ||
                moment(today).isAfter(moment(lastCheckIn))
            ) {
                fetchedData.lastCheckIn = today;
                await super.patch(fetchedData.id, fetchedData);
                return {
                    code: 200,
                    message: "CheckIn Successful",
                    data: {
                        name: fetchedData.name,
                        studentId: fetchedData.studentIdImage,
                    },
                };
            }
            return {
                code: 400,
                message: `Invalid CheckIn : Last CheckIn on ${fetchedData.lastCheckIn}`,
            };
        }
        if (!data.razorpay_order_id) {
            throw new Error("Missing required field: order_id");
        }
        if (!data.razorpay_payment_id || !data.razorpay_signature) {
            throw new Error("Missing required field: payment_id");
        }

        const queryOrderId = data.razorpay_order_id;
        let existingData = await super.find({
            query: {
                $or: [{ orderId: queryOrderId }],
            },
        });
        if (
            !existingData ||
            !existingData.data ||
            existingData.data.length === 0
        ) {
            return {
                code: 400, // Not found
                message: `Data with orderId "${queryOrderId}" not found`,
            };
        }
        let updatedData = existingData.data[0];
        var instance = new Razorpay({
            key_id: rzp_key_id,
            key_secret: rzp_key_secret,
        });

        var {
            validatePaymentVerification,
            validateWebhookSignature,
        } = require("../../../node_modules/razorpay/dist/utils/razorpay-utils");
        if (
            validatePaymentVerification(
                {
                    order_id: updatedData.orderId,
                    payment_id: data.razorpay_payment_id,
                },
                data.razorpay_signature,
                rzp_key_secret,
            )
        ) {
            updatedData.paymentIdRazorpay = data.razorpay_payment_id;
            updatedData.paymentStatus = true;
            await super.patch(updatedData.id, updatedData); // Update payment data
        } else {
            await super.delete(updatedData.remove);
            return {
                code: 400, // Not found
                message: "Inavlid Payment Details",
            };
        }
        return {
            code: 200,
            message: "Payment Successfull",
        };
    }
};
