const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  accountNumber: String,
  amountPaid: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Payment', paymentSchema);
