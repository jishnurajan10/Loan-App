// src/Components/Dashboard/Dashboard.jsx
import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [profile] = useState({
    name: 'Jishnu',
    email: 'jishnurajan@example.com',
    mobile: '+91 987652346'
  });

  const [loan, setLoan] = useState({
    amount: '',
    interest: '',
    tenure: '',
    type: '',
    status: ''
  });

  const [approvedLoan, setApprovedLoan] = useState(null);

  const handleChange = (e) => {
    setLoan({ ...loan, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emi = calculateEMI(loan.amount, loan.interest, loan.tenure);
    setApprovedLoan({ ...loan, emi });
  };

  const calculateEMI = (amount, rate, tenure) => {
    const principal = parseFloat(amount);
    const interest = parseFloat(rate) / 12 / 100;
    const months = parseInt(tenure);
    const emi =
      (principal * interest * Math.pow(1 + interest, months)) /
      (Math.pow(1 + interest, months) - 1);
    return emi ? emi.toFixed(2) : '0.00';
  };

  return (
    <div className="dashboard-wrapper">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#apply-loan">Apply Loan</a></li>
          <li><a href="#approved-loan">Approved Loan</a></li>
        </ul>
      </div>

      <div className="dashboard-container">
        <h1>Welcome to Loan Portal</h1>

        {/* Profile Section */}
        <section id="profile" className="profile-section">
          <div className="profile-avatar">{profile.name.charAt(0)}</div>
          <div className="profile-details">
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Mobile:</strong> {profile.mobile}</p>
          </div>
        </section>

        {/* Loan Form Section */}
        <section id="apply-loan" className="loan-form-section">
          <h2>Loan Application</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              name="amount"
              placeholder="Loan Amount (₹)"
              value={loan.amount}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="interest"
              placeholder="Interest Rate (%)"
              value={loan.interest}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="tenure"
              placeholder="Tenure (Months)"
              value={loan.tenure}
              onChange={handleChange}
              required
            />
            <select name="type" value={loan.type} onChange={handleChange} required>
              <option value="">Select Loan Type</option>
              <option value="Home Loan">Home Loan</option>
              <option value="Car Loan">Car Loan</option>
              <option value="Personal Loan">Personal Loan</option>
            </select>
            <button type="submit">Submit Application</button>
          </form>
        </section>

        {/* Approved Loan Section */}
        {approvedLoan && (
          <section id="approved-loan" className="approved-loan-section">
            <h2>Approved Loan Details</h2>
            <p><strong>Type:</strong> {approvedLoan.type}</p>
            <p><strong>Amount:</strong> ₹{approvedLoan.amount}</p>
            <p><strong>Interest:</strong> {approvedLoan.interest}%</p>
            <p><strong>Tenure:</strong> {approvedLoan.tenure} months</p>
            <p><strong>Status:</strong> {approvedLoan.status}</p>
            <p><strong>Calculated EMI:</strong> ₹{approvedLoan.emi} / month</p>
          </section>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
