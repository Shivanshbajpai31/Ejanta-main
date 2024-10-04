import React from 'react';
import row1image from '../Images/hero.jpeg';
import Image from 'react-bootstrap/Image';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import './Landing.css';

function Firstrow() {
  return (
    <div style={{ background: "" }}>
      <Container className='mt-5'>
        <Row>
          <Col md={6}>
            <div className="firstrow d-flex flex-column align-items-center justify-content-center">
              <h2>Report local problems and collaborate with authorities for swift solutions.</h2>
              <Button as={NavLink} to="/register" style={{ width: '200px', height: '50px', fontSize: '20px', background: "#425d83" }}>Get Started</Button>
            </div>
          </Col>
          <Col md={6} className="d-flex justify-content-center align-items-center imagecontainer">
            <Image src={row1image} alt="" rounded style={{ width: '500px', height: '300px' }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Firstrow;
