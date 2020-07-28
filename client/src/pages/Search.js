import React from "react";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import Jumbotron from "../components/Jumbotron";
import Searchbox from "../components/Searchbox";
import Results from "../components/Results"

function Search() {
  return (
    <Container style={{ backgroundColor: "#E98074" }}>
      <Row>
        <Col size="lg">
          <Jumbotron>
            <h1>(REACT) Google Books Search</h1>
            <h3>Search for and Save Books of Interest</h3>
          </Jumbotron>
          <Searchbox />
          <Results/>
        </Col>
      </Row>
    </Container>
  );
}

export default Search;
