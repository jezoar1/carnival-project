import React from 'react'
import "../Admin/Adminnavbar.css"
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Adminnavbar() {
  return (
    <section>
        <form>
    <Navbar variant="dark" expand="lg" className="custom-navbar">
    
    <Container>
      <Navbar.Brand href="#home">ADMIN</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#Adminnavbar">Home</Nav.Link>
          <Nav.Link href="./rview">Result</Nav.Link>
          <NavDropdown title="Events" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Student</NavDropdown.Item>
            {/* <NavDropdown.Item href="#action/3.2">Coordinator</NavDropdown.Item> */}
            <NavDropdown.Item href="./aevent">Add Events</NavDropdown.Item>
            <NavDropdown.Item href="./ablog">Add Blogs</NavDropdown.Item>
            <NavDropdown.Divider />
            {/* <NavDropdown.Item href="#action/3.4">LOGOUT</NavDropdown.Item> */}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
    
  </Navbar>
  </form>
  </section>
  )
}

export default Adminnavbar