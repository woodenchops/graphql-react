const mongoose = require('mongoose');

const Todo = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('todo', Todo);
