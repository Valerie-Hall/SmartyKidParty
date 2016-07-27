'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Event Schema
 */
var EventSchema = new Schema({
  hostName: {
    type: String,
    default: '',
    required: 'Please fill host name',
    trim: true
  },
  childName: {
    type: String,
    default: '',
    required: 'Please fill child name',
    trim: true
  },
  childAge: {
    type: Number,
    default: '',
    trim: true
  },
  numberOfKids: {
    type: Number,
    default: '',
    trim: true
  },
  location: {
    type: String,
    default: '',
    required: 'Please fill location',
    trim: true
  },
  email: {
    type: String,
    default: '',
    required: 'Please fill email',
    trim: true
  },
  eventDate: {
    type: Date,
    default: '',
    required: 'Please fill date of party',
    trim: true
  },
  startTime: {
    type: String,
    default: '',
    required: 'Please fill start time',
    trim: true
  },
  message: {
    type: String,
    default: '',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Event', EventSchema);
