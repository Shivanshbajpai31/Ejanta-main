// src/components/Login.js
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './Login.css'; // Import your custom styles
import Footers from '../Footer/Footer';

const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/users/login', {
        email,
        password,
      });

      // Handle the response, e.g., store user data in state or context
      console.log('Login successful:', response.data);
      localStorage.setItem('user',response.data.username);

      // Redirect to home page or another route
      navigate("/home");
    } catch (error) {
      // Handle login error, e.g., show error message
      console.error('Error during login:', error.message);
      setError('Invalid email or password');
    }
  };

  return (
    <div>
    <Container className="login-container mb-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6} className="login-form-container">
          <div className="mb-2 text-align-center">
            <h3 className="font-light text-3xl text-gray-800 mt-4 mb-4">Login</h3>
          </div>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Your Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleLogin} className="login-button">
              Login
            </Button>
            <div className="mt-3">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            <div className="mt-3">
              Don't have an account? <Link to="/register">Register</Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
    <Footers/>
    </div>
  );
};

export default Login;
