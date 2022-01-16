import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ChangeTitle } from "../../../titlechange/titlechange";
import aboutimage from '../../../images/about-img.jpg';
import signature from '../../../images/signature.png';

const About = () => {
  ChangeTitle("About us");
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
              <h1 className="display-4 fw-bold">About Us</h1>
              <p className="fs-6 pt-3">
                <Link
                  style={{ color: "#333", textDecoration: "none" }}
                  to="/home"
                >
                  Home
                </Link>{" "}
                / <span style={{ color: "orangered" }}>About Us</span>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className="g-3 py-5">
          <Col lg={7} md={6} sm={12} xs={12}>
            <h5 style={{color:"orangered"}}>Welcome to TopStock</h5>
            <h2 className="pb-4 pt-2 fw-bold">Our Success <br /> And Company History.</h2>
            <div className="fs-5 text-secondary text-justify border border border-5 ps-4 border-top-0 border-bottom-0 border-end-0">
            We work to ensure that your business prospers and brings you sufficient profit
            </div>
            <p className="py-4">Ac bibendum ac in erat. Donec posuere consectetuer volutpat ac, sollicitudin quam quisque, at interdum dignissim, fringilla elit risus lorem eu eleifend option congue nihil.</p>
            <img src={signature} alt="" />
            <p style={{fontWeight:"500"}} className="pt-5"><span style={{color:"orangered"}}>Eren stopher</span> - Founder of kingstock</p>
          </Col>
          <Col lg={5} md={6} sm={12} xs={12}>
            <img className="w-100" src={aboutimage} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
