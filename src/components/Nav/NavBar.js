import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "./../../Assets/Logo.png";
import Discord from "./../../Assets/discord.png";
import Insta from "./../../Assets/instagram 1.png";
import Twitter from "./../../Assets/Twitter.png";

export default function NavBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="black">
        <Container >
          <Navbar.Brand href="#home">
            <img src={Logo} height="90px" width="100%" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link> */}
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              <Nav.Link href="#Home">HOME</Nav.Link>
              <Nav.Link href="#Text">OVERVIEW</Nav.Link>
              <Nav.Link href="#Roadmap">ROAD MAP</Nav.Link>
              <Nav.Link href="#Team">TEAM</Nav.Link>
              <Nav.Link href="#Faq">FAQ</Nav.Link>
              <Nav.Link href="https://www.instagram.com/pixelteco"target="_blank">
                <img src={Insta} width="auto" height="30px" />
              </Nav.Link>
              <Nav.Link href="https://discord.gg/EHQQy76FPJ"target="_blank">
                <img src={Discord} width="auto" height="30px" />
              </Nav.Link>
              <Nav.Link href="https://twitter.com/pixelteco"target="_blank">
                <img src={Twitter} width="auto" height="30px" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
