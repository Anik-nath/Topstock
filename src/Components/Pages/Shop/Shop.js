import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
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
              <p className="fs-6 pt-3"><Link style={{color:"#333",textDecoration:"none"}} to="/home">Home</Link> / <span style={{color:"orangered"}}>Shop</span></p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="shop py-5">
        <Container>
          <Row className="g-4">
            {products.map((product) => (
               <Col key={product._id} lg={3} sm={12} xs={12} md={3}>
                 <div className="card bg-light">
                     <div style={{height:"300px"}}> 
                         <img className="w-100 h-100 rounded" src={product.image} alt="" />
                     </div>
                 </div>
                 <div className="bg-white d-flex flex-column pt-2">
                   <span className="fs-6">{product.title}</span>
                    <span className="fs-6 fw-bold text-dark">${product.price}</span>
                   </div>
               </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Shop;

/* 
https://i.postimg.cc/L4wvZ5Gc/mega-menu-bg.jpg
https://i.postimg.cc/NMV8TCC6/prduct-detl-large-img11.jpg
https://i.postimg.cc/65ZcVwXy/prduct-detl-large-img5.jpg
https://i.postimg.cc/SxprD5SV/prduct-detl-large-img6.jpg
https://i.postimg.cc/N0sxwHrH/prduct-detl-thamb11.jpg
https://i.postimg.cc/kgFyZcDC/prduct-detl-thamb5.jpg
https://i.postimg.cc/JntcsCx7/prduct-detl-thamb6.jpg
https://i.postimg.cc/QCTQqgvR/product1.jpg
https://i.postimg.cc/QtB1XkNH/product10.jpg
https://i.postimg.cc/W3QrtFtS/product11.jpg
https://i.postimg.cc/zvKhhzgN/product12.jpg
https://i.postimg.cc/GpXx3mkS/product2.jpg
https://i.postimg.cc/2jb7mm32/product3.jpg
https://i.postimg.cc/pVwYL7Fx/product4.jpg
https://i.postimg.cc/gk3yXDVh/product5.jpg
https://i.postimg.cc/4xZ6z9PS/product6.jpg
https://i.postimg.cc/P54mK5Fr/product7.jpg
https://i.postimg.cc/5tK8dkVh/product8.jpg
https://i.postimg.cc/tg4FcGLd/product9.jpg

*/
