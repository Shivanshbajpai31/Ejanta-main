// src/components/Register.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Footers from '../Footer/Footer';



import './register.css'; // Import the CSS file

import { useNavigate} from 'react-router-dom';




const Register = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  



  

  const handleRegister = async () => {
    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('username', username);
      formData.append('password', password);
    

      const response = await axios.post('http://localhost:5001/api/v1/users/signup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },

      });
navigate("/signin")

      console.log('Registration successful:', response.data);
    } catch (error) {
      console.error('Error during registration:', error.message);
    }
    
  };

  return (
    <div>
    <Container className="register-container">
      

          <div className="register-form-controlller">
            <h3>Register</h3>
          
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>Your Email</Form.Label>
              <Form.Control type="email" placeholder="Ex. james@bond.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formUsername">
              <Form.Label>Your Username</Form.Label>
              <Form.Control type="text" placeholder="Your Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            
            
            <div className='d-flex flex-column align-items-center justify-content-center mt-4'>
            <Button variant="primary" onClick={handleRegister} className='register-button'  as={NavLink} to="/login">
              Register
            </Button>
            </div>
          </Form>
       
     </div>
    </Container>
    <Footers/>
    </div>
  );
};

export default Register;