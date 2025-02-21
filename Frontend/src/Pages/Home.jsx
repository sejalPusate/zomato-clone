import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'; // External CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <a href="#">Get the App</a>
        </div>
        <div className="navbar-right">
          <a href="#">Investor Relations</a>
          <a href="#">Add Restaurant</a>
          <Link to="/login">Log in</Link>
          <Link to="/register">Sign up</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="logo">zomato</h1>
        <p className="subtitle">Discover the best food & drinks in Pune</p>

        {/* Search Bar */}
        <div className="search-bar">
          <select className="location-select">
            <option>Pune</option>
            <option>Mumbai</option>
            <option>Delhi</option>
            <option>Bangalore</option>
            <option>Hyderabad</option>
            <option>Chennai</option>
            <option>Kolkata</option>
            <option>Ahmedabad</option>
            <option>Surat</option>
          </select>
          <input
            type="text"
            placeholder="Search for restaurant, cuisine, or a dish"
            className="search-input"
          />
          <button className="search-button">Search</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
