const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  email: {
    type: Array,
    required: true
  },

});

module.exports = mongoose.model('friend', UserSchema);
