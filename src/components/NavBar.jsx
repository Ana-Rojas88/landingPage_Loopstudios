import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de tener esto
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Y esto si usas Bootstrap JS

const NavBar = () => {
  const link = ['About', 'Careers', 'Events', 'Products', 'Support'];

  return (
    <Navbar  expand="lg"> {/* Añade expand="lg" */}
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end " id="basic-navbar-nav">
          {
            link.map((item, index) => (
              <Navbar.Text className='m-2' key={index}>
                <Nav.Link href="#home" style={{ color: 'white' }}>{item}</Nav.Link>
              </Navbar.Text>
            ))
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
