const mongoose = require('mongoose');
const validator = require('validator');
const {
  requiredTrue,
  min,
  max,
  messageInvalidURL,
} = require('../libs/validationParameters');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: requiredTrue,
    minlength: min(2),
    maxlength: max(30),
  },
  link: {
    type: String,
    required: requiredTrue,
    validate: {
      validator(link) {
        return validator.isURL(link);
      },
      message: messageInvalidURL,
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: requiredTrue,
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    default: [],
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('card', cardSchema);
