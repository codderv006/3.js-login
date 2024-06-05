import React from 'react';
import { Link } from 'react-router-dom';
import Background from './Background';
import '../styles.css';

const RegisterPage = () => {
  return (
    <div className="container">
      <Background />
      <div className="form-container">
        <h2>Register</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? <Link to="/">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
