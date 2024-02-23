/* eslint-disable no-unused-vars */
const { Service } = require("feathers-sequelize");
const Razorpay = require("razorpay");
const rzp_key_id = "rzp_test_WDb6DFQhixarEj";
const rzp_key_secret = "fUUWcbMHsxkn0A4V86YBhIaV";

exports.Payments = class Payments extends Service {
    async create(data, params) {
        const { name, contact, email, studentIdImage, studentId } = data;
        const amount = 50000;
        // const studentIdImage=params.file.path;
        // const studentIdImage = data.file.path;

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
        console.log(data);
        if (!data.razorpay_order_id) {
            throw new Error("Missing required field: orderId");
        }
        if (
            !data.razorpay_payment_id ||
            !data.razorpay_signature
        ) {
            throw new Error("Missing required field: paymentId");
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
                code: 404, // Not found
                message: `Data with orderId "${queryOrderId}" not found`,
            };
        }
        existingData = existingData.data[0];
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
                    order_id: existingData.orderId,
                    payment_id: data.razorpay_payment_id,
                },
                data.razorpay_signature,
                rzp_key_secret,
            )
        ) {
            existingData.paymentIdRazorpay = data.razorpay_payment_id;
            existingData.paymentStatus = 1;
        } else {
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
