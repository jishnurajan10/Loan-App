const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: String,
  accountNumber: { type: String, unique: true },
  loanAmount: Number,
  dueAmount: Number,
});

module.exports = mongoose.model('Customer', customerSchema);
