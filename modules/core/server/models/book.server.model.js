'use strict';

/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    crypto = require('crypto'),
    validator = require('validator');

/**
 * Avalidation function for local strategy properties
 */
var validateLocalStrategyProperty = function (property) {
  return ((this.provider !== 'local' && !this.updated) || property.length);
};

/**
 * Book Schema
 */
var BookSchema = new Schema({
  title: {
    type: String,
    trim: true,
    default: '',
    validate: [validateLocalStrategyProperty, 'Please add a book title']
  },
  author: {
    type: String,
    trim: true,
            default: '',
    validate: [validateLocalStrategyProperty, 'Please add an author']
  },
  edition: {
    type: int,
  },
  updated: {
    type: Date
  },
  created: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('Book', BookSchema);
