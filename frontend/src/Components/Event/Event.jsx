// UserEvents.js

import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

import './Event.css'; // Import your custom styles
import Footers from '../Footer/Footer';

const UserEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch events data from the MongoDB endpoint
    axios.get('http://localhost:3000/api/events/get-events')
      .then(response => {
        setEvents(response.data || []);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleJoinNow = (eventId) => {
    // Hardcoded Google Forms URL (replace with your actual URL)
    const googleFormsURL = 'https://docs.google.com/forms/d/e/1FAIpQLSepJ6xdxADjNljaBoeygy8oyCd6ez-N3DfTG8JHVGCTGN3frQ/viewform?usp=sf_link';

    // Open the Google Forms URL in a new tab
    window.open(googleFormsURL, '_blank');
  };

  return (
    <div>
      <Container>
        <h2 className="mt-4">Upcoming Events</h2>
        {loading && <p>Loading events...</p>}
        {error && <p>Error loading events: {error}</p>}
        {!loading && !error && (
          <Row>
            {events.map((event) => (
              <Col key={event._id} md={4} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={`http://localhost:3000/${event.image}`} />
                  <Card.Body>
                    <Card.Title>{event.title}</Card.Title>
                    <Card.Text>{event.description}</Card.Text>
                    <Card.Text>Date: {event.date}</Card.Text>
                    <Card.Text>Location: {event.location}</Card.Text>
                    <Button variant="primary" onClick={() => handleJoinNow(event._id)}>
                      Join Now
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
      <Footers />
    </div>
  );
};

export default UserEvents;
