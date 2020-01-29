import React from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";

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
  				<Link to="/">← Back to Login</Link>
  			</Col>
			</Row>
    </Container>
  );
};

export default NoMatch;