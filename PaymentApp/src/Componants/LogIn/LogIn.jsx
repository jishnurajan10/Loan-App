// src/Componants/Auth/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate(); // ⬅️ React Router hook

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate login success (replace with real API call)
    console.log('Logging in with:', form);
    setLoginSuccess(true);

    // Optional: Reset form
    setForm({ email: '', password: '' });

    // Redirect to home after short delay
    setTimeout(() => {
      navigate('/'); // ⬅️ Redirect to home
    }, 1500);
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

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

        <button type="submit">Log In</button>

        {loginSuccess && <p className="success-message">Logged in successfully!</p>}

        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      </form>
    </div>
  );
};

export default Login;
