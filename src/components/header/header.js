// react
import React from 'react';
import { Link } from 'react-router-dom';
// bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
// image
import Logo from '../../logos/icon.png';


// header for login and sign up pages only - without the dropdown...
function Header() {
  return (
    <Navbar id="firstNav" expand="lg" bg="light" variant="light">
    <Container fluid>
    <Navbar.Brand id="firstNavText" href="#home">Groupomania</Navbar.Brand>
      <Navbar.Brand href="#home" className="mr-auto">  
        <img
          id="firstNavImg"
          src={Logo}
          height="60"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav id="navLink" className="ml-auto">
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Header;


