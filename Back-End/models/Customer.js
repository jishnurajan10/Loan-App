const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  accountNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  issueDate: {
    type: Date,
    required: true
  },
  interestRate: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  tenure: {
    type: Number,
    required: true,
    min: 1 // in months
  },
  loanAmount: {
    type: Number,
    required: true,
    min: 1000
  },
  emiAmount: {
    type: Number,
    required: true,
    min: 0
  },
  emiDue: {
    type: Number,
    required: true,
    min: 0
  },
  status: {
    type: String,
    enum: ['active', 'closed', 'defaulted'],
    default: 'active'
  },
  nextDueDate: {
    type: Date,
    required: true
  }
}, {
  timestamps: true
});

// Generate account number
customerSchema.pre('save', function(next) {
  if (!this.accountNumber) {
    this.accountNumber = 'LA' + Date.now() + Math.floor(Math.random() * 1000);
  }
  next();
});

module.exports = mongoose.model('Customer', customerSchema);
