const ticket = require('./ticket/ticket.service.js');
const payments = require('./payments/payments.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(ticket);
  app.configure(payments);
};
