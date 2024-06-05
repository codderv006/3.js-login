import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import n1img from '../assets/n1.jpg';
import n2img from '../assets/n2.png';
import n3img from '../assets/n3.jpg';
import n4img from '../assets/n4.jpg';
import n5img from '../assets/n5.png';
import n6img from '../assets/n6.png';

const HomePage = () => {
  return (
    <body>
    <div className="home-page">
      {/* Header Section */}
      <header className="header">
        <div className="logo">NGO Platform Logo</div>
        <nav>
          <ul>
            <li><Link to="/login">Sign In</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </nav>
      </header>
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Connecting Philanthropists with NGOs</h1>
          <p>A platform to support meaningful causes and make a positive impact.</p>
          <Link to="/register" className="cta-button">Get Started</Link>
        </div>
        {/* Add hero image or video with parallax effect */}
      </section>
      
      {/* Featured NGO Section */}
      <section className="featured-ngos">
      <h2>Featured NGOs</h2>
      <div className="ngo-cards">
        <div className="ngo-card">
          <img src={n1img} alt="NGO 1" />
          <div className="ngo-info">
            <h3>NGO Name 1</h3>
            <p>Location: <a href="https://maps.google.com/">Link to Maps</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus in nisl eget pretium.</p>
          </div>
        </div>
        <div className="ngo-card">
          <img src={n2img} alt="NGO 2" />
          <div className="ngo-info">
            <h3>NGO Name 2</h3>
            <p>Location: <a href="https://maps.google.com/">Link to Maps</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus in nisl eget pretium.</p>
          </div>
        </div>
        <div className="ngo-card">
          <img src={n3img} alt="NGO 3" />
          <div className="ngo-info">
            <h3>NGO Name 3</h3>
            <p>Location: <a href="https://maps.google.com/">Link to Maps</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus in nisl eget pretium.</p>
          </div>
        </div>
        <div className="ngo-card">
          <img src={n4img} alt="NGO 3" />
          <div className="ngo-info">
            <h3>NGO Name 4</h3>
            <p>Location: <a href="https://maps.google.com/">Link to Maps</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus in nisl eget pretium.</p>
          </div>
        </div>
        <div className="ngo-card">
          <img src={n5img} alt="NGO 3" />
          <div className="ngo-info">
            <h3>NGO Name 5</h3>
            <p>Location: <a href="https://maps.google.com/">Link to Maps</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus in nisl eget pretium.</p>
          </div>
        </div>
        <div className="ngo-card">
          <img src={n6img} alt="NGO 3" />
          <div className="ngo-info">
            <h3>NGO Name 6</h3>
            <p>Location: <a href="https://maps.google.com/">Link to Maps</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus in nisl eget pretium.</p>
          </div>
        </div>
        {/* Repeat the above pattern for other NGOs */}
      </div>
    </section>
      
      {/* Key Features Section */}
      <section className="key-features">
        <h2>Key Features</h2>
        <div className="feature-cards">
          {/* Display key features using stylish cards or tiles */}
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          {/* Display step-by-step guide with illustrations */}
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-slider">
          {/* Display testimonials from satisfied users */}
        </div>
      </section>
      
      {/* Footer Section */}
      <footer className="footer">
        <div>Contact Us: info@ngoplatform.com</div>
        <div>
          <ul className="social-links">
            <li><a href="https://facebook.com/ngoplatform" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com/ngoplatform" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://linkedin.com/ngoplatform" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
        <div>&copy; 2024 NGO Platform. All rights reserved.</div>
      </footer>
    </div>
    </body>
    
  );
};

export default HomePage;
