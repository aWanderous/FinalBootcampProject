import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Detail extends Component {
  state = {
    task: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getTask(this.props.match.params.id)
      .then(res => this.setState({ task: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.task.title} to be done by {this.state.task.helper}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <Col size="md-4">
                <img className="thumbnail" role="img" src={this.state.task.image}></img>
              </Col>
              <Col size="md-6">
                <h1>Task details</h1>
                <p>
                  {this.state.task.cast}
                </p>
              </Col>
              <h1>Plot</h1>
              <p>
                {this.state.task.plot}
              </p>
              <p>
              <a href={this.state.task.link}>Link to more details</a>
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Tasks</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
