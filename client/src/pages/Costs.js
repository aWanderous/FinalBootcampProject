import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Cost extends Component {
  state = {
    list: {}
  };
  
  componentDidMount() {
    API.getTask(this.props.match.params.id)
      .then(res => this.setState({ list: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.list.task} by {this.state.list.assigned}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <Col size="md-6">
                <h1>Cost</h1>
                <p>
                  {this.state.list.cost}
                </p>
              </Col>
              <h1>Plot</h1>
              <p>
                {this.state.list.details}
              </p>
              <p>
              <a href={this.state.list.link}>Link to more details</a>
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/saved">← Back to Tasks</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Cost;
