import React, { useState } from 'react';
import axios from 'axios';
import './SendAlert.css'

const AlertPage = () => {
  const [alertData, setAlertData] = useState({
    title: '',
    category: '',
    description: '',
    location: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAlertData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Assuming you have a backend API endpoint for creating alerts
      await axios.post('http://localhost:3000/api/alerts/create', alertData);
      console.log('Alert created successfully!');
      // Optionally, you can redirect the user or perform additional actions after creating the alert.
    } catch (error) {
      console.error('Error creating alert:', error.message);
    }
  };

  return (
    <div>
      <h2>Create Alert</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={alertData.title} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" name="category" value={alertData.category} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={alertData.description} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" name="location" value={alertData.location} onChange={handleInputChange} required />
        </div>
        <div>
          <button type="submit">Create Alert</button>
        </div>
      </form>
    </div>
  );
};

export default AlertPage;