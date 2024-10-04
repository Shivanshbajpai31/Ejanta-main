// src/components/AlertCard.jsx
import React, { useState, useEffect } from 'react';
import './AlertCard.css';
import axios from 'axios';

import { Card, Button, ListGroup } from 'react-bootstrap';
import Footers from '../Footer/Footer';

const AlertCard = ({ onClose }) => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Fetch alerts from the backend API
    const fetchAlerts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/alerts');
        setAlerts(response.data);
      } catch (error) {
        console.error('Error fetching alerts:', error);
      }
    };

    fetchAlerts();
  }, []); // Run this effect only once on component mount

  return (
    <>
    <div>
      <Card className="mb-4 alert-card warningscolor" style={{ position: 'sticky', top: '80px' }}>
        <Card.Header className="d-flex justify-content-between alert-header">
          <h2 className="alert-title">Alerts</h2>
         
        </Card.Header>
        <Card.Body>
          {Array.isArray(alerts) && alerts.length > 0 ? (
            <ListGroup variant="flush">
              {alerts.map((alert, index) => (
                <ListGroup.Item key={index}>
                  <strong>Title:</strong> {alert.title}<br />
                  
                  <strong>Description:</strong> {alert.description}<br />
                  <strong>Location:</strong> {alert.location}
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <p className="no-alerts">No alerts to display.</p>
          )}
        </Card.Body>
      </Card>
     
    </div>
    <Footers/>
    </>
  );
};

export default AlertCard;
