import React, { Component } from "react";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import Jumbotron from "../components/Jumbotron";
import Searchbox from "../components/Searchbox";
import Results from "../components/Results";
import API from "../utils/API";

class Search extends Component {
  state = {
    search: "",
    results: [],
    error: "",
  };

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.bookSearch(this.state.search.split(" ").join("+"))
      .then((res) => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.items, error: "" });
        this.setState({ search: "" });
        console.log(`request succeeded`);
        console.log(res.data.items);
      })
      .catch((err) => this.setState({ error: err.message }));
  };

  render() {
    return (
      <Container style={{ backgroundColor: "#E98074" }}>
        <Row>
          <Col size="lg">
            <Jumbotron>
              <h1>(REACT) Google Books Search</h1>
              <h3>Search for and Save Books of Interest</h3>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="lg">
            <Searchbox
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
              search={this.state.search}
            />
          </Col>
        </Row>
        <Row>
          <Col size="lg">
            <Results results={this.state.results} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
