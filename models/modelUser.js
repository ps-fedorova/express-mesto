const mongoose = require('mongoose');
const validator = require('validator');
const {
  requiredTrue,
  min,
  max,
  messageInvalidURL,
} = require('../libs/validationParameters');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: requiredTrue,
    minlength: min(2),
    maxlength: max(30),
  },
  about: {
    type: String,
    required: requiredTrue,
    minlength: min(2),
    maxlength: max(30),
  },
  avatar: {
    type: String,
    required: requiredTrue,
    validate: {
      validator(link) {
        return validator.isURL(link);
      },
      message: messageInvalidURL,
    },
  },
});

module.exports = mongoose.model('user', userSchema);
