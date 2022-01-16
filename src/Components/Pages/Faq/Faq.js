import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ChangeTitle } from "../../../titlechange/titlechange";

const Faq = () => {
    ChangeTitle("FAQ");
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
              <h1 className="display-4 fw-bold">FAQ</h1>
              <p className="fs-6 pt-3">
                <Link
                  style={{ color: "#333", textDecoration: "none" }}
                  to="/home"
                >
                  Home
                </Link>{" "}
                / <span style={{ color: "orangered" }}>FAQ</span>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
        </div>
    );
};

export default Faq;