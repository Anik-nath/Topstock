import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const AllOrders = () => {
    const [orders,setOrders] = useState([]);
    const {user} = useAuth();

    useEffect(()=>{
        fetch(`https://stormy-meadow-30073.herokuapp.com/orders/?email=${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[user.email])
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
              <h1 className="display-4 fw-bold">My Orders</h1>
              <p className="fs-6 pt-3">
                <Link
                  style={{ color: "#333", textDecoration: "none" }}
                  to="/home"
                >
                  Home
                </Link>{" "}
                / <span style={{ color: "orangered" }}>MyOrders</span>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="py-5">
        <Table className="text-center" responsive="sm" bordered striped hover size="sm">
          <thead style={{backgroundColor:"orangered",color:"#fff"}}>
            <tr>
              <th>Preview</th>
              <th>Order ID</th>
              <th>Order Date</th>
              <th>Product Name</th>
              <th>Customer Name</th>
              <th>Contact</th>
              <th>NumOfProduct</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
              {
                  orders.map(order => 
                    <tr key={order._id}>
                        <td>
                            <div style={{width:"80px",height:"80px"}}>
                                <img className="w-100" src={order.proImage} alt="" />
                            </div>
                        </td>
                        <td>{order._id}</td>
                        <td>{order.orderDate}</td>
                        <td>{order.product}</td>
                        <td>{order.Customer}</td>
                        <td>{order.Contact}</td>
                        <td>{order.NumOfProduct}</td>
                        <td className="text-danger fw-bold">Pending</td>
                    </tr>
                    )
              }
            
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default AllOrders;
