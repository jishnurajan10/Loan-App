// src/Componants/Auth/Signup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [signupSuccess, setSignupSuccess] = useState(false);
  const navigate = useNavigate(); // Hook to navigate after signup

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate API signup success (replace with real API call)
    console.log('Signing up with:', form);
    setSignupSuccess(true);

    // Optional: Reset form
    setForm({ name: '', email: '', password: '' });

    // Redirect to home after delay
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={form.password}
          onChange={handleChange}
        />

        <button type="submit">Sign Up</button>

        {signupSuccess && <p className="success-message">Signed up successfully!</p>}

        <p>Already have an account? <a href="/login">Log In</a></p>
      </form>
    </div>
  );
};

export default Signup;
