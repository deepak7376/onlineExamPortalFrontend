// NavigationBar.js
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar bg="body-tertiary" expand="lg">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            {/* <Nav.Link href="/explore">Explore</Nav.Link> */}
            <NavDropdown title="Explore" id="explore-nav-dropdown">
              <NavDropdown.Item href="/explore/category/SSC">SSC</NavDropdown.Item>
              <NavDropdown.Item href="/explore/category/GATE">GATE</NavDropdown.Item>
              <NavDropdown.Item href="/explore/category/CAT">CAT</NavDropdown.Item>
              <NavDropdown.Item href="/explore/category/Other">Other</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Something else here</NavDropdown.Item> */}
            </NavDropdown>
            {/* <Nav.Link href="#">Problems</Nav.Link> */}
            <NavDropdown title="Interview" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Something else here</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Discuss</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl type="search" placeholder="Search" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
          {/* Add Login and Signup buttons */}
          <Link to="/login">
            <Button variant="primary" className="ms-2">Login</Button>
          </Link>
          <Link to="/signup">
            <Button variant="success" className="ms-2">Signup</Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
