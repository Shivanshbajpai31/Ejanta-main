// Navbar.jsx
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbars = () => {
  const location = useLocation(); // Use the useLocation hook to get the current path

  const isHomePage = location.pathname === '/'; // Check if the current path is '/'
  const isHomeOrLogin = location.pathname === '/' || location.pathname === '/login'; // Check if the current path is '/' or '/login'

  return (
    <Navbar expand="lg" className='custom-navbar'>
      <Container>
        <Navbar.Brand href="#home" className='logo' as={NavLink} to="/">E-Jantaa</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto items">
       

            <div className="centeritem">
              {!isHomeOrLogin && (
                <>
                  <Nav.Link as={NavLink} to="/home" className='item'>Home</Nav.Link>
                  <Nav.Link as={NavLink} to="/alert" className='item'>Alert</Nav.Link>
                  <Nav.Link as={NavLink} to="/report" className='item'>Report</Nav.Link>
                  <Nav.Link as={NavLink} to="/event" className='item'>Event</Nav.Link>
                </>
              )}
            </div>
            <div className="user">
              {!isHomeOrLogin && (
                // Add user-related links or components here
                <Nav.Link as={NavLink} to="/userdashboard" className='item'>
                  <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                </Nav.Link>
              )}
              <div className="auth-buttons"> {/* New div for auth buttons */}
                {isHomePage ? (
                  <Nav.Link as={NavLink} to="/login" className='transparent-button'>Login</Nav.Link>
                ) : (
                  <Nav.Link as={NavLink} to="/" className='transparent-button'>Logout</Nav.Link>
                )}
                {isHomePage && (
                  <Nav.Link as={NavLink} to="/register" className='transparent-button'>Register</Nav.Link>
                )}
              </div>
            </div>

            <div className="user">
              {!isHomeOrLogin && (
                // Add user-related links or components here
                <Nav.Link as={NavLink} to="/userdashboard" className='item'>
                  <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                </Nav.Link>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;