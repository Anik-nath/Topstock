import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const [data, setData] = useState({});
  const { googleSignIn, login, error } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogle = () => {
    googleSignIn(location, navigate);
  };

  const handleInput = (e) => {
    const field = e.target.name;
    let value = e.target.value;
    // console.log(value);
    const newField = { ...data };
    newField[field] = value;
    setData(newField);
    // console.log(newField);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(data.email, data.password);
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row pb-5">
          <div className="col-lg-6 mx-auto">
            <p>
              {error && (
                <Alert variant="danger">
                  Your information was wrong. Try again
                </Alert>
              )}
            </p>
            <Form onSubmit={handleLogin} className="bg-white border p-3 mt-5">
              <h3 className="text-center mb-4">Sign in Please</h3>
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
              <Button
                className="w-100 rounded-pill"
                variant="primary"
                type="submit"
              >
                Sign in
              </Button>
              <div className="text-center my-5">
                <span className="">You have no account?</span>
                <Link
                  to="/registration"
                  className="ms-3"
                  variant="primary"
                  type="submit"
                >
                  Create an account now
                </Link>
              </div>
              <hr />
              <Form.Group
                className="mb-3 d-flex justify-content-center"
                controlId="formBasicCheckbox"
              >
                <Button
                  onClick={handleGoogle}
                  className="btn  btn-light shadow rounded-pill"
                >
                  {" "}
                  Sign in With Google
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
