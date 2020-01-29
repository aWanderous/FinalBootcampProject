import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import {Container } from "../components/Grid";
import Footer from "../components/Footer";

class Login extends Component {
	
	render() {
		return (
			<Container fluid>
				<Jumbotron>
					login
				</Jumbotron>
				<Footer/>
			</Container>
		);
	};
};

export default Login;