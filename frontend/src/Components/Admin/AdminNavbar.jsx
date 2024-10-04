// Navbars.js

import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import './AdminNavbar.css'; // Import your custom styles

const AdminNavbar = () => {
  return (
    <Navbar bg="success" expand="lg" variant="light" sticky="top">
      <Container className='khai'>
        <Navbar.Brand as={NavLink} to="/admin-dashboard">
          Admin
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/">
              Verify and Handle
            </Nav.Link>
            <Nav.Link as={NavLink} to="/admin-dashboard/send-alert">
              Send Alert
            </Nav.Link>
            <Nav.Link as={NavLink} to="/admin-dashboard/send-event">
              Send Event
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AdminNavbar;