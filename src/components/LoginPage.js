import React from 'react';
import { Link } from 'react-router-dom';
import Background from './Background';
import '../styles.css';

const LoginPage = () => {
  return (
    <div className="container">
      <Background />
      <div className="form-container">
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
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
