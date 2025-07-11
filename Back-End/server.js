const express = require('express');
const mongoose = require('mongoose'); // Only declare this once
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

// Import Routes
const authRoutes = require('./routes/authRoutes');
const customerRoutes = require('./routes/customerRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route Middleware
app.use('/api/auth', authRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/payments', paymentRoutes);

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
  });
})
.catch((error) => {
  console.error('MongoDB connection error:', error.message);
});
