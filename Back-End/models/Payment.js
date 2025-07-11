const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  },
  accountNumber: {
    type: String,
    required: true
  },
  paymentDate: {
    type: Date,
    default: Date.now
  },
  paymentAmount: {
    type: Number,
    required: true,
    min: 0
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'completed'
  },
  paymentMethod: {
    type: String,
    enum: ['online', 'cash', 'cheque', 'bank_transfer'],
    default: 'online'
  },
  transactionId: {
    type: String,
    unique: true,
    sparse: true
  },
  remarks: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

// Generate transaction ID
paymentSchema.pre('save', function(next) {
  if (!this.transactionId) {
    this.transactionId = 'TXN' + Date.now() + Math.floor(Math.random() * 10000);
  }
  next();
});

module.exports = mongoose.model('Payment', paymentSchema);