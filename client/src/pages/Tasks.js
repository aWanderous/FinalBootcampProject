import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Tasks extends Component {
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
                {this.state.list.task}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h4>assigned to {this.state.list.assigned}</h4>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h3>Details</h3>
              <p>
                {this.state.list.details}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h5>Costs</h5>
              <p>
                {this.state.list.cost}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/Task">← Back to Tasks</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Tasks;