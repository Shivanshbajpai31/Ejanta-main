import axios from 'axios';
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import './Report.css';
import Footers from '../Footer/Footer';

const LocationPicker = ({ setLocation }) => {
  const map = useMapEvents({
    click: (e) => {
      setLocation(`${e.latlng.lat}, ${e.latlng.lng}`);
    },
  });

  return null;
};


const ReportForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    image: null,
    user: localStorage.getItem('user'),
    category: '',
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFormData({ ...formData, image: file });
    }
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setFormData({ ...formData, category: selectedCategory });
  };

  const handleManualCategoryInput = (e) => {
    const manualCategory = e.target.value;
    setFormData({ ...formData, category: manualCategory });
  };

  const handleLocationChange = (location) => {
    setFormData({ ...formData, location });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('location', formData.location);
    formDataToSend.append('image', formData.image);
    formDataToSend.append('user', formData.user);
    formDataToSend.append('category', formData.category);

    try {
      const response = await axios.post("http://localhost:3000/api/reports/create", formDataToSend);
      console.log('Report Submitted:', response.data);
      // Handle success (e.g., show a success message)
      window.location.href = "http://localhost:5173/home"
    } catch (error) {
      console.error('Error submitting report:', error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className='reportcontainer'>
      <div className="report-form-container">
        <form onSubmit={handleSubmit}>
          <h2>Report a Problem</h2>

          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            {formData.category === 'other' ? (
              <input
                type="text"
                name="manualCategory"
                placeholder="Enter your category"
                value={formData.category}
                onChange={handleManualCategoryInput}
              />
            ) : (
              <select
                name="category"
                value={formData.category}
                onChange={handleCategoryChange}
              >
                <option value="">Select Category</option>
                <option value="issue">Issue</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            )}
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            ></textarea>
          </div>

          <div className="form-group">
            <label>Location</label>
            <MapContainer center={[0, 0]} zoom={3} style={{ height: '400px', width: '100%' }}>
              <LocationPicker setLocation={handleLocationChange} />
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {formData.location && (
                <Marker position={formData.location.split(',').map(Number)}>
                  <Popup>Your selected location</Popup>
                </Marker>
              )}
            </MapContainer>
          </div>

          <div className="form-group">
            <label>Image</label>
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </div>
          <div className='d-flex flex-column align-items-center justify-content-center mt-4'>
          <button type="submit">Submit Report</button>
          </div>
        </form>
      </div>
      <Footers/>
    </div>
  );
};

export default ReportForm;
