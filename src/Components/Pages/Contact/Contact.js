import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ChangeTitle } from "../../../titlechange/titlechange";

const Contact = () => {
    ChangeTitle("Contact us");
    return (
        <div>
            <div
        id="banner"
        className="bg-light px-lg-0 px-1 d-flex flex-column justify-content-center align-items-center"
        style={{ height: "60vh" }}
      >
        <Container>
          <Row>
            <Col lg={6} sm={12} xs={12} md={12} className="pt-lg-0 pt-5 bg-danger mx-auto text-center">
              <h1>Contact Us</h1>
            </Col>
          </Row>
        </Container>
      </div>
        </div>
    );
};

export default Contact;