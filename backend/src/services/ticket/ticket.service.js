// Initializes the `ticket` service on path `/ticket`
const { Ticket } = require('./ticket.class');
const createModel = require('../../models/ticket.model');
const hooks = require('./ticket.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/ticket', new Ticket(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('ticket');

  service.hooks(hooks);
};