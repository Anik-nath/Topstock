import React, { useEffect, useState } from "react";
import { Badge, Col, Row, Spinner } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const PopularProduct = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    const url = `https://stormy-meadow-30073.herokuapp.com/shop`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPopular(data));
  }, []);
  return (
    <div>
      <div className="container pb-5 mb-5">
        <div className="text-center py-5">
          <h6 style={{ color: "orangered" }}>Featured Product</h6>
          <h2 className="text-dark">Popular Products</h2>
        </div>
        <Row className="g-3">
        {popular.length === 0 && (
                  <div className="mx-auto text-center">
                    {" "}
                    <Spinner animation="grow" variant="warning" />
                  </div>
                )}
          {popular
            .filter((pro) => pro.rate == 5.0)
            .map((product) => (
              <Col key={product._id} lg={4} sm={12} xs={12} md={6}>
                <div className="bg-light position-relative">
                  <Link to={`/productdetials/${product._id}`}>
                    <div style={{ height: "300px" }}>
                        
                    <Badge
                    bg="transparent"
                    className="position-absolute start-0 top-0 px-2  rounded-0 p-1 px-2"
                    >
                    <Rating
                    className="text-warning p-2"
                    initialRating={product.rate}
                    readonly
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    />
                    </Badge>

                      <img
                        className="w-100 h-100 rounded-0"
                        src={product.image}
                        alt=""
                      />
                    </div>
                  </Link>
                </div>
                <div style={{color:"#555"}} className="bg-white d-flex flex-column pt-2">
                  <span className="fs-6">{product.title}</span>
                  <span className="fs-6 fw-bold">
                    ${product.price}
                  </span>
                </div>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
};

export default PopularProduct;
