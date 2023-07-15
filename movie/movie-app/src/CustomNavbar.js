import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const CustomNavbar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="md" className="mb-4" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">Movie App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/trending">Trending Movies</Nav.Link>
              <Nav.Link as={Link} to="/categories">Movie Categories</Nav.Link>
              <Nav.Link as={Link} to="/hero">Hero Section</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default CustomNavbar;
