import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import homebanner from "../../../images/home1-slider-img1.png";
import card1 from "../../../images/banner1.jpg";
import card2 from "../../../images/banner2.jpg";
import card3 from "../../../images/banner3.jpg";
import card4 from "../../../images/banner4.jpg";
import { ChangeTitle } from "../../../titlechange/titlechange";
const Home = () => {
  ChangeTitle("home");
  const cardbg1 = {
    background : `url(${card1})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center"
  }
  const cardbg2 = {
    background : `url(${card2})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center"
  }
  const cardbg3 = {
    background : `url(${card3})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center"
  }
  const cardbg4 = {
    background : `url(${card4})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center"
  }
  return (
    <div>
      <div id="banner" className="bg-light px-lg-0 px-1 d-flex flex-column justify-content-center align-items-center" style={{height:"100vh"}}>
        <Container>
          <Row >
            <Col lg={6} sm={12} xs={12} md={12} className="pt-lg-0 pt-5">
              
              <span style={{color:"orangered"}}
                className="d-block theme-color fw-bold"
              >
                Featured Product
              </span>
              <h1
                className="py-2 text-dark fw-bold"
              >
                Cosima Channel <br /> Tufted Chair
              </h1>
              <p className="pe-5 me-5 fw-bold text-black-50 pb-3">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium
              </p>
              <Link to="/shop">
                <button className="myButton rounded-pill">Shop Now <i className="fas fa-arrow-right"></i> </button>
              </Link>
            </Col>
            <Col lg={6} sm={12} xs={12} md={12}>
              <img className="w-100 banner-img" src={homebanner} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="py-5">
        <Container>
          <Row className="g-3">
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className="p-5" style={cardbg1} >
                <p>Mega Save 20%</p>
                <h3 className="py-2">Verne Rattan Chair<br />with Cushion</h3>
                <Link to="/shop">
                <button className="myButton rounded-pill my-2">Shop Now <i className="fas fa-arrow-right"></i> </button>
              </Link>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className="p-5" style={cardbg2} >
                <p>Mega Save 20%</p>
                <h3 className="py-2">Verne Rattan Chair<br />with Cushion</h3>
                <Link to="/shop">
                <button className="myButton rounded-pill my-2">Shop Now <i className="fas fa-arrow-right"></i> </button>
              </Link>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className="p-5" style={cardbg3} >
                <p>Mega Save 20%</p>
                <h3 className="py-2">Verne Rattan Chair<br />with Cushion</h3>
                <Link to="/shop">
                <button className="myButton rounded-pill my-2">Shop Now <i className="fas fa-arrow-right"></i> </button>
              </Link>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className="p-5" style={cardbg4} >
                <p>Mega Save 20%</p>
                <h3 className="py-2">Verne Rattan Chair<br />with Cushion</h3>
                <Link to="/shop">
                <button className="myButton rounded-pill my-2">Shop Now <i className="fas fa-arrow-right"></i> </button>
              </Link>
              </div>
            </Col>
            
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
<h1>home</h1>;
