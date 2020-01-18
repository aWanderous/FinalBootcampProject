import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>404 Not a Page Found</h1>
          </Jumbotron>
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

export default NoMatch;
