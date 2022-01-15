import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import blog1 from "../../../images/blog-img1.jpg";
import blog2 from "../../../images/blog-img2.jpg";
import blog3 from "../../../images/blog-img3.jpg";


const NewsBlog = () => {

  return (
    <div className="container py-5 mb-5">
        <div className="text-center py-5">
            <h6 style={{color:"orangered"}}>Popular News</h6>
            <h2 className="text-dark">Latest News & Blog</h2>
        </div>
        <Row>
        <Col lg={4} md={4} sm={12} xs={12} className="">
          <div className="mx-auto">
            <Card.Img variant="top" src={blog2} />
            <div>
              <Card.Title>Avoid Keyboard Event-Related Bugs Browser-Based Transliteration</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </div>
          </div>
        </Col>
        <Col lg={4} md={4} sm={12} xs={12} className="my-5 my-lg-0 my-md-0">
          <div className="mx-auto">
            <Card.Img variant="top" src={blog3} />
            <div>
              <Card.Title>Design Decisions With Neville Brody Design Cannot Remain Neutral</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </div>
          </div>
        </Col>
        <Col lg={4} md={4} sm={12} xs={12} className="">
          <div className="mx-auto">
            <Card.Img variant="top" src={blog1} />
            <div>
              <Card.Title>Smashing Podcast Episode 11 With Eduardo Bouças Is Sourcebit</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </div>
          </div>
        </Col>
        </Row>
    </div>
  );
};

export default NewsBlog;
