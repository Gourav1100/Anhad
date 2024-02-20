const { Service } = require('feathers-sequelize');
const Razorpay = require('razorpay');

// const multer=require('multer');
// const {cloudinary,storage}=require('../cloudinary');
// const upload= multer({storage});


const rzp_key_id = "rzp_test_WDb6DFQhixarEj"
const rzp_key_secret = "fUUWcbMHsxkn0A4V86YBhIaV"

exports.Payments = class Payments extends Service {
  async create(data, params) {
    const { name, contact, email, amount,studentIdImage} = data;

    // const studentIdImage = data.file.path;
    if (!name || !contact || !email || !amount || !studentIdImage) {
      throw new Error('Missing required fields: name, contact, email, or amount');
    }
    if (isNaN(amount) || amount <= 0) {
      throw new Error('Invalid amount: must be a positive number');
    }

    var instance = new Razorpay({
      key_id: rzp_key_id,
      key_secret: rzp_key_secret,
    });

    var options = {
      amount: data.amount, // amount in the smallest currency unit
      currency: "INR",
      receipt: data.email
    };

    async function createOrderAndReturnId(options) {
      const order = await instance.orders.create(options); // Await the promise
      return order.id;
    }

    const orderId = await createOrderAndReturnId(options); // Await the order creation
    if (!orderId) {
      throw new Error('Failed to create order. Please try again later.');
    }

    console.log("Order created successfully. ID:", orderId);

    const paymentStatus = false;
    const paymentData = {
      orderId,
      amount,
      name,
      email,
      contact,
      paymentStatus,
      studentIdImage
    };

    try {
      const savedPayment = await super.create(paymentData, params); // Save payment data
      return{
        code :200,
        data : savedPayment,
        message : "Payment Successfull"
      }
    } catch (error) {
      throw new Error(`Failed to create payment: ${error.message}`);
    }

  }

  async patch(id,data,params){
    if (!data.orderId && !params.query.orderId) {
      throw new Error('Missing required field: orderId');
    }
    if (!data.razorpay_payment_id || !data.razorpay_order_id || data.razorpay_signature) {
      throw new Error('Missing required field: paymentId');
    }

    const queryorderId = data.orderId || params.query.orderId;
    let existingData;
    existingData = await super.find({
      query:{
        $or: [{ orderId: queryorderId }]
      }
    });
    if (!existingData || !existingData.data || existingData.data.length === 0) {
      return {
        code: 404, // Not found
        message: 'Data with orderId "${queryorderId}" not found'
      };
    }
    existingData = existingData.data[0];
    var instance = new Razorpay({ key_id: rzp_key_id, key_secret: rzp_key_secret })

    var { validatePaymentVerification, validateWebhookSignature } = require('../../../node_modules/razorpay/dist/utils/razorpay-utils');
    if(validatePaymentVerification({"order_id": existingData.orderId, "payment_id": data.razorpay_payment_id},data.razorpay_signature, rzp_key_secret)){
        existingData.paymentIdRazorpay = data.razorpay_payment_id;
        existingData.paymentStatus = 1;
    }
    else{
      return {
        code: 400, // Not found
        message: 'Inavlid Payment Details'
      };
    }
    return{
      code :200,
      message : "Payment Successfull"
    }
  }
};
