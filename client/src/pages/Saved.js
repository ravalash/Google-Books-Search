import React from "react";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import Jumbotron from "../components/Jumbotron"


function Saved() {
  return (
    <Container style={{backgroundColor: '#E98074'}}>
      <Row>
      <Col size="lg">
      <Jumbotron >
            <h1>(REACT) Google Books Search</h1>
            <h3>Search for and Save Books of Interest</h3>

          </Jumbotron>

        </Col>

      </Row>
    </Container>
  );
}

export default Saved;
