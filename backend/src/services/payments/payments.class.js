const { Service } = require('feathers-sequelize');
// const uuid = require('uuid/v4'); // Use v4 for better compatibility

exports.Payments = class Payments extends Service {
  async create(data, params) {
    const { name, contact, email, amount, } = data;
    if (!name || !contact || !email || !amount) {
      throw new Error('Missing required fields: name, contact, email, or amount');
    }
    if (isNaN(amount) || amount <= 0) {
      throw new Error('Invalid amount: must be a positive number');
    }
    // Generate a random, unique order ID
    // const orderId = uuid().replace(/-/g, ''); // Remove hyphens for cleaner order IDs
    const orderId = 3;
    const paymentStatus = false;

    const paymentData = {
      orderId,
      amount,
      name,
      email,
      contact,
      paymentStatus,
    };
    console.log(paymentData)
    // Save the payment details to the SQLite database
    try {
       return super.create(paymentData,params)
    } catch (error) {
      // await transaction.rollback();
      throw new Error(`Failed to create payment: ${error.message}`);
    }
  }
};
