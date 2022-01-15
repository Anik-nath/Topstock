import React, { useEffect, useState } from "react";
import {
  Accordion,
  Card,
  Col,
  Container,
  Row,
  useAccordionButton,
  Spinner,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { ChangeTitle } from "../../../titlechange/titlechange";

const Shop = () => {
  ChangeTitle("Shop");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/shop`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <span
        type="button"
        style={{ backgroundColor: "none" }}
        onClick={decoratedOnClick}
      >
        {children}
      </span>
    );
  }

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
              <h1 className="display-4 fw-bold">Shop</h1>
              <p className="fs-6 pt-3">
                <Link
                  style={{ color: "#333", textDecoration: "none" }}
                  to="/home"
                >
                  Home
                </Link>{" "}
                / <span style={{ color: "orangered" }}>Shop</span>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="shop py-5">
        <Container>
          <Row>
            <Col lg={3} md={3} sm={12} xs={12}>
              <h5 className="fw-bold mb-3">Product Categories</h5>
              <Accordion>
                <div>
                  <div className="d-flex justify-content-between bg-white">
                    <span className="fs-6">Accesories</span>
                    <CustomToggle eventKey="0">
                      <i className="fas fa-chevron-right"></i>
                    </CustomToggle>
                  </div>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <p className="mb-1">Floor</p>
                      <p className="mb-1">Outdoor</p>
                    </Card.Body>
                  </Accordion.Collapse>
                </div>
                <div className="my-3">
                  <div className="d-flex justify-content-between bg-white">
                    <span className="fs-6">Clothing</span>
                    <CustomToggle eventKey="1">
                      <i className="fas fa-chevron-right"></i>
                    </CustomToggle>
                  </div>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <p className="mb-1">Men</p>
                      <p className="mb-1">Women</p>
                      <p className="mb-1">Children</p>
                    </Card.Body>
                  </Accordion.Collapse>
                </div>
                <div>
                  <div className="d-flex justify-content-between bg-white">
                    <span className="fs-6">Interior</span>
                    <CustomToggle eventKey="2">
                      <i className="fas fa-chevron-right"></i>
                    </CustomToggle>
                  </div>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      <p className="mb-1">Men</p>
                      <p className="mb-1">Women</p>
                      <p className="mb-1">Children</p>
                    </Card.Body>
                  </Accordion.Collapse>
                </div>
                <div className="my-3">
                  <div className="d-flex justify-content-between bg-white">
                    <span className="fs-6">Lights</span>
                    <CustomToggle eventKey="3">
                      <i className="fas fa-chevron-right"></i>
                    </CustomToggle>
                  </div>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      <p className="mb-1">Bathroom lights</p>
                      <p className="mb-1">Wall lights</p>
                      <p className="mb-1">Table lamps</p>
                      <p className="mb-1">Celling lights</p>
                    </Card.Body>
                  </Accordion.Collapse>
                </div>
              </Accordion>
              <h5 className="fw-bold py-2">Filter By Price</h5>
              <div>
                <label for="customRange3" className="form-label">
                  Price : $0 - $400
                </label>
                <input
                  type="range"
                  className="form-range"
                  min="0"
                  max="400"
                  step="50"
                  id="customRange3"
                />
              </div>
            </Col>
            <Col lg={9} md={9} sm={12} xs={12}>
              <Row className="g-3">
                {products.length === 0 && (
                  <div className="mx-auto text-center">
                    {" "}
                    <Spinner animation="grow" variant="warning" />
                  </div>
                )}
                {products.map((product) => (
                  <Col key={product._id} lg={4} sm={12} xs={12} md={6}>
                    <div className="card bg-light">
                      <Link to={`/productdetials/${product._id}`}>
                        <div style={{ height: "300px" }}>
                          <img
                            className="w-100 h-100 rounded"
                            src={product.image}
                            alt=""
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="bg-white d-flex flex-column pt-2">
                      <span className="fs-6">{product.title}</span>
                      <span className="fs-6 fw-bold text-dark">
                        ${product.price}
                      </span>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Shop;
