import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card"; 
import "./index.css";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
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

      {/* Cards Section (Appears Below the Hero Section) */}
      <div className="cards-container">
        <Card
          image="https://imgs.search.brave.com/Qgjb5EJgGysr99Wi1ckT2D3pqFQ8H736397YA2TVaao/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9mb29kLWZyb20t/cmVzdGF1cmFudC1t/ZW51XzgzMDE5OC0z/MTE0LmpwZz9zZW10/PWFpc19oeWJyaWQ"
          title="Order Online"
          description="Stay home and order to your doorstep"
        />
        <Card
          image="https://imgs.search.brave.com/HAMmpc7lrfGqAPqvgPUbaJj7UlrTg46YwsDyiQBjQr4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXNp/emVyLm90c3RhdGlj/LmNvbS92Mi9waG90/b3MveGxhcmdlLzEv/MzA0NTg4NTgud2Vi/cA"
          title="Dining"
          description="View the city's favourite dining venues"
        />
        <Card
          image="https://imgs.search.brave.com/WKjNJW3xD51QvFXjaIYW7eU0YKLXeDpP133vQzu9iEg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI4/MTA3MDk2Ny9waG90/by9ncm91cC1vZi1w/ZW9wbGUtYXQtbXVz/aWMtY29uY2VydC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/eE5nU3Z1U1dlZDBo/VU0tUElueUs0S3I2/ODJqb0Z4LVZ5ZHRJ/VnAtWFdKWT0"
          title="Live Events"
          description="Discover India’s best events & concerts"
        />
      </div>
    </div>
  );
};

export default Home;