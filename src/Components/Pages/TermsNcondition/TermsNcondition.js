import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ChangeTitle } from "../../../titlechange/titlechange";

const TermsNcondition = () => {
  ChangeTitle("Terms and conditions");
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
              <h1 className="display-4 fw-bold">Terms & Conditions</h1>
              <p className="fs-6 pt-3">
                <Link
                  style={{ color: "#333", textDecoration: "none" }}
                  to="/home"
                >
                  Home
                </Link>{" "}
                / <span style={{ color: "orangered" }}>Terms & conditions</span>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container style={{textAlign:"justify"}} className="py-5">
        <div id="terms">
          <h4 className="display-6 mb-4">Our Terms</h4>
          <p>
            01. adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque
            tincidunt dolor ut convallis lobortis. Proin ullamcorper eros ac
            ultrices imperdiet.
          </p>
          <p>
            02. consectetur adipiscing elit. Morbi feugiat molestie ex quis
            finibus. Quisque tincidunt dolor ut convallis lobortis. Proin
            ullamcorper eros ac ultrices imperdiet.
          </p>
          <p>
            03. Vivamus eros nibh, dictum sed venenatis vitae, ornare eget
            magna. Etiam mattis, felis eu interdum posuere, justo neque dictum
            sapien, eu luctus neque nulla non ante. Quisque pharetra facilisis
            mauris a hendrerit. Donec rutrum maximus turpis id luctus. In
            gravida pulvinar elit, a auctor mauris scele.
          </p>
          <p>
            04. luctus neque nulla non ante. Quisque Donec rutrum maximus turpis
            id luctus.
          </p>
          <p>05. dictum sed venenatis vitae, ornare eget magna.</p>
          <p>
            06. neque dictum sapien, eu luctus neque nulla non ante. Quisque
            pharetra facilisis mauris a hendrerit.
          </p>
        </div>
        <div id="condition">
          <h4 className="display-6 mb-4 pt-5">Our conditions</h4>
          <p>
            01. adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque
            tincidunt dolor ut convallis lobortis. Proin ullamcorper eros ac
            ultrices imperdiet.
          </p>
          <p>
            02. consectetur adipiscing elit. Morbi feugiat molestie ex quis
            finibus. Quisque tincidunt dolor ut convallis lobortis. Proin
            ullamcorper eros ac ultrices imperdiet.
          </p>
          <p>
            03. Vivamus eros nibh, dictum sed venenatis vitae, ornare eget
            magna. Etiam mattis, felis eu interdum posuere, justo neque dictum
            sapien, eu luctus neque nulla non ante. Quisque pharetra facilisis
            mauris a hendrerit. Donec rutrum maximus turpis id luctus. In
            gravida pulvinar elit, a auctor mauris scele.
          </p>
          <p>
            04. luctus neque nulla non ante. Quisque Donec rutrum maximus turpis
            id luctus.
          </p>
          <p>05. dictum sed venenatis vitae, ornare eget magna.</p>
        </div>
        <div id="contact">

        </div>
      </Container>
    </div>
  );
};

export default TermsNcondition;
