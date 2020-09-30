import React from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";

function Header(props) {
  return (
    <React.Fragment>
      <h1>Dive Log Tracker</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
        <li>
          <Link to="/signin">Sign Out</Link>
        </li>
      </ul>
      {/* <Navbar.Brand href = "#home"><h1>Dive Log Tracker/Planner</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className ="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Dive Logs</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-navbar-nav">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">2nd action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">thingy</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">diffrent link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse> */}
    </React.Fragment>
  );
}

export default Header