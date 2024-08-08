import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../Card/Card";

const Sevicesection = () => {
  return (
    <>
      <section className="hm-services-sec" id="service">
        <Container>
          <Row>
            <Col className="hm-services-title">
              <h2>
                We <span> Cater</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col className="">
              <Card />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Sevicesection;
