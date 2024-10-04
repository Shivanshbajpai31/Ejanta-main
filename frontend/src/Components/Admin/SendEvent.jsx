// components/EventForm.js
import React, { useState } from 'react';
import axios from 'axios';

const EventForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    image: null,
    date: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = new FormData();
    dataToSend.append('title', formData.title);
    dataToSend.append('description', formData.description);
    dataToSend.append('location', formData.location);
    dataToSend.append('image', formData.image);
    dataToSend.append('date', formData.date);

    try {
      await axios.post('http://localhost:3000/api/events/create', dataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle success, e.g., show a success message
      console.log('Event submitted successfully');
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error('Error submitting event:', error);
    }
  };

  return (
    <div>
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} />

        <label>Description</label>
        <textarea name="description" value={formData.description} onChange={handleChange}></textarea>

        <label>Location</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} />

        <label>Image</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />

        <label>Date</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} />

        <button type="submit">Submit Event</button>
      </form>
    </div>
  );
};

export default EventForm;