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
            <Col
              lg={6}
              sm={12}
              xs={12}
              md={12}
              className="pt-lg-0 pt-5 mx-auto text-center"
            >
              <h1 className="display-4 fw-bold">Contact Us</h1>
              <p className="fs-6 pt-3">
                <Link
                  style={{ color: "#333", textDecoration: "none" }}
                  to="/home"
                >
                  Home
                </Link>{" "}
                / <span style={{ color: "orangered" }}>Contact Us</span>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className="py-5 g-3">
          <Col lg={6} md={6} sm={12} xs={12}>
            <h4 className="display-6 mb-4">Contact Us</h4>
            <p className="fs-6 text-dark">For any feedbacks or improvements on our online store, please fill in this contact form. We will take a look and reply you within 24 hours. We always need your feedbacks to continuously leverage your shopping experience.</p>
            <div className="d-flex gap-3 align-items-center">
              <span>Social Share: </span>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <h4 className="display-6 mb-4">Write to us</h4>
            <form action="">
              <Row className="g-3">
                <Col lg={6} md={6} sm={12} xs={12}>
                  <input required className="w-100 border-0 bg-light p-2" type="text" placeholder="Name*" />
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <input required className="w-100 border-0 bg-light p-2" type="text" placeholder="Email*" />
                </Col>
              </Row>
             <div className="py-3">
             <input required className="w-100 border-0 bg-light p-2" type="text" placeholder="Subject*" />
             </div>
             <div>
             <textarea rows="5" className="w-100 border-0 bg-light p-2" type="text" placeholder="Comments" />
             </div>
          <div className="text-center py-3">
          <button className="myButton">Send Message</button>
          </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
