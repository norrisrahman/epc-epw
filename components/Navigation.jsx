import React from "react";
import Image from "next/image";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../public/assets/images/logo.svg";
import bgnav from "../public/assets/images/nav.svg";

export default function Navigation() {
  return (
    <>
      <Navbar bg="dark" className="cust-bg" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Image
              src={logo}
              width="63"
              height="63"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#link">ABOUT</Nav.Link>
              <Nav.Link href="#link">EVENT</Nav.Link>
              <Nav.Link href="#link">MERCHANDISE</Nav.Link>
              <Nav.Link href="#link">LOGIN</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
