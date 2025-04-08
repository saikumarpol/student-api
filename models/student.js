const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  age: {
    type: Number,
    min: [18, 'Age must be at least 18'],
  },
  department: {
    type: String,
  },
  admissionDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Student', studentSchema);