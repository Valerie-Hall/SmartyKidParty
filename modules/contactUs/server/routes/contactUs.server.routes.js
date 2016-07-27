'use strict';

/**
 * Module dependencies
 */
var contactUs = require('../controllers/contactUs.server.controller');


module.exports = function (app) {

  app.route('/api/send-mail').post(contactUs.sendMail);

};
