import React from "react";
import { Navbar as Nav } from "react-bootstrap";

const Navbar = () => {
  return (
    <Nav>
      <Nav.Brand>API Books</Nav.Brand>
      <Nav.Toggle />
      <Nav.Collapse className="justify-content-end">
        <Nav.Text>
          Developer: <b>Santiago Varela</b>
        </Nav.Text>
      </Nav.Collapse>
    </Nav>
  );
};

export default Navbar;
