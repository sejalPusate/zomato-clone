import React, { useState } from 'react';
import './AddRestaurant.css';

const AddRestaurant = () => {
  const [restaurant, setRestaurant] = useState({
    name: '',
    location: '',
    cuisine: '',
    contact: ''
  });

  const handleChange = (e) => {
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Restaurant Added:', restaurant);
    alert('Restaurant added successfully!');
    setRestaurant({ name: '', location: '', cuisine: '', contact: '' });
  };

  return (
    <div className="add-restaurant-container">
      <div className="overlay"></div>
      <div className="add-restaurant-content">
        <h1>Add Your Restaurant</h1>
        <p>Partner with us and grow your business</p>
        <form className="add-restaurant-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Restaurant Name" value={restaurant.name} onChange={handleChange} required />
          <input type="text" name="location" placeholder="Location" value={restaurant.location} onChange={handleChange} required />
          <input type="text" name="cuisine" placeholder="Cuisine Type" value={restaurant.cuisine} onChange={handleChange} required />
          <input type="text" name="contact" placeholder="Contact Number" value={restaurant.contact} onChange={handleChange} required />
          <button type="submit" className="add-restaurant-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddRestaurant;
