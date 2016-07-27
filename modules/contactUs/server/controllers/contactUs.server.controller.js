'use strict';

/**
 * Module dependencies
 */
var path = require('path'),
  mongoose = require('mongoose'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller')),
    nodemailer = require('nodemailer'),
    transporter = nodemailer.createTransport();

/**
 * Send email when contact form is submitted
 */
exports.sendMail = function (req, res) {

    var data = req.body;

    transporter.sendMail({
        from: data.email,
        to: 'vrhall16@gmail.com',
        subject: 'Contact Us From ' + data.name,
        text: data.message
    });

    res.json(data);
};