import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Help extends Component {
  state = {
    helper: {},
    list: {}
  };
  
  componentDidMount() {
    API.getHelper(this.props.match.params.id)
      .then(res => this.setState({ helper: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.helper.name}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h5>Tasks</h5>
              <p>
                {this.state.list.task}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/Helper">← Back to Helpers</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Help;