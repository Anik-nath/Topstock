import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
  const [data, setData] = useState({});
  const { createUser } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleInput = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newField = { ...data };
    newField[field] = value;
    setData(newField);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(data.email, data.password, location, navigate);
  };
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
              <h1 className="display-4 fw-bold">Registration</h1>
              <p className="fs-6 pt-3">
                <Link
                  style={{ color: "#333", textDecoration: "none" }}
                  to="/home"
                >
                  Home
                </Link>{" "}
                / <span style={{ color: "orangered" }}>Registration</span>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="container py-5">
        <div className="row pb-5">
          <div className="col-lg-6 mx-auto">
            <Form onSubmit={handleSubmit} className="bg-white border p-3 mt-5">
              <h3 className="text-center mb-4">Register Form Here</h3>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className="h5">Username </Form.Label>
                <Form.Control
                  required
                  onBlur={handleInput}
                  name="displayName"
                  type="text"
                  placeholder="Enter fullname"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="h5">Email address</Form.Label>
                <Form.Control
                  required
                  onBlur={handleInput}
                  name="email"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="h5">Password</Form.Label>
                <Form.Control
                  required
                  onBlur={handleInput}
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <button
                className="w-100 myButton rounded"
                variant="primary"
                type="submit"
              >
                Sign up
              </button>
              <div className="text-center my-5">
                <span className="">You have an account?</span>
                <Link
                  to="/login"
                  className="ms-3"
                  variant="primary"
                  type="submit"
                >
                  Sign in Please
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
