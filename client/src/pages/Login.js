import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import {Container } from "../components/Grid";

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