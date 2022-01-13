import React from "react";
import {
  Badge,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
const Navigations = () => {
  return (
    <>
      <Navbar
        sticky="top"
        className="py-3"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container fluid className="px-lg-5">
          <Navbar.Brand as={HashLink} to="/home" className="fs-2">
            <span style={{ color: "orangered" }} className="fw-bold">
              Top
            </span>
            Stock
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav style={{ fontWeight: "500" }} className="me-auto">
              <Nav.Link className="mx-lg-2" as={HashLink} to="/home">
                Home
              </Nav.Link>
              <Nav.Link className="mx-lg-2" as={HashLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link className="mx-lg-2" as={HashLink} to="/shop">
                Shop
              </Nav.Link>
              <Nav.Link className="mx-lg-2" as={HashLink} to="/contact">
                Contact
              </Nav.Link>
              <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item as={HashLink} to="/terms">Terms & Conditions</NavDropdown.Item>
                <NavDropdown.Item as={HashLink} to="/privacy">Our Privacy</NavDropdown.Item>
                <NavDropdown.Item as={HashLink} to="/faq">FAQ</NavDropdown.Item>
                <NavDropdown.Item as={HashLink} to="/blog">Blog</NavDropdown.Item>
                <NavDropdown.Item as={HashLink} to="/register">Login & Register</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Form className="my-2 my-lg-0">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2 rounded-pill border-0"
                  aria-label="Search"
                />
              </Form>
            </Nav>
            <Nav style={{ fontWeight: "500" }}>
              <Nav.Link className="mx-lg-2" as={HashLink} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={HashLink} to="/cart">
                <i className="fas fa-shopping-cart position-relative fs-5">
                  <Badge
                    bg="warning"
                    className="position-absolute start-50 bottom-50 px-2 rounded-circle"
                  >
                    2
                  </Badge>
                </i>
              </Nav.Link>
              <Nav.Link as={HashLink} to="/wishlist">
                <i className="far fa-heart mx-lg-2 fs-5"></i>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#user">
                <i className="fas fa-user-circle fs-5"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigations;
