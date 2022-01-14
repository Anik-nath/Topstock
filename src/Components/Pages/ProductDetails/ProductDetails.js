import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ChangeTitle } from "../../../titlechange/titlechange";
import ProductCompany from "../../Shared/ProductCompany/ProductCompany";

const ProductDetails = () => {
  ChangeTitle("Product details");
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/productdetails/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [id]);

  const count = document.getElementById("count");
  const add = () => {
    count.innerHTML++;
  };
  const remove = () => {
    if (count.innerHTML < 1) {
      return 0;
    } else {
      count.innerHTML--;
    }
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
              <h1 className="display-4 fw-bold">Product</h1>
              <p className="fs-6 pt-3">
                <Link
                  style={{ color: "#333", textDecoration: "none" }}
                  to="/home"
                >
                  Home
                </Link>{" "}
                / <span style={{ color: "orangered" }}>Product</span>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="py-5">
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <img className="w-100" src={details.image} alt="" />
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <h3>{details.title}</h3>
            <Rating
              className="text-warning py-3"
              initialRating={details.rate}
              readonly
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
            />{" "}
            <span> (on {details.count} reviews) </span>
            <h4 style={{ color: "orangered" }}>${details.price}</h4>
            <p className="pt-3 text-justify">{details.description} </p>
            <div className="d-flex justify-content-between align-items-center my-4">
              <div className="d-flex flex-row">
                <button
                  onClick={remove}
                  id="minus"
                  className="border px-4 py-2"
                >
                  -
                </button>
                <span id="count" className="border px-4 py-2">
                  0
                </span>
                <button onClick={add} id="plus" className="border px-4 py-2">
                  +
                </button>
              </div>
              <div>
                <i
                  style={{ color: "orangered" }}
                  className="far fa-heart border px-4 py-2"
                ></i>
              </div>
              <button className="myButton">add to cart +</button>
            </div>
            <p>
              <span className="h5">Catagories :</span> {details.category}{" "}
            </p>
            <div className="d-flex align-itmes-center gap-3 fs-6 text-black-50">
              <h5 className="text-black pt-1">Share now : </h5>
              <i className="fab fa-facebook border p-2 border-2 rounded-circle"></i>
              <i className="fab fa-instagram border p-2 border-2 rounded-circle"></i>
              <i className="fab fa-linkedin border p-2 border-2 rounded-circle"></i>
              <i className="fab fa-twitter border p-2 border-2 rounded-circle"></i>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="">
          <ProductCompany></ProductCompany>
      </div>
    </div>
  );
};

export default ProductDetails;
