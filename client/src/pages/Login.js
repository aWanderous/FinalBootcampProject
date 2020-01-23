import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";

class Login extends Component {
	
	render() {
		return (
			<Container fluid>
				<Jumbotron>
					<h1>login</h1>
				</Jumbotron>
					</Container>
		);
	}
}

export default Login;