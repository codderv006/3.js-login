import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Background from './Background';
import '../styles.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded login logic
    if (email === 't@mail.com' && password === '123') {
      // Redirect to home page on successful login
      window.location.href = '/home';
    } else {
      // Show error message or handle invalid login
      alert('Invalid email or password');
    }
  };

  return (
    <div className="container">
      <Background />
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
