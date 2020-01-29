import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import {Container } from "../components/Grid";
import { FormBtn } from "../components/Form";
import Footer from "../components/Footer";

class Login extends Component {
	
	render() {
		return (
			<Container fluid>
				<Jumbotron>
					Sign in
				</Jumbotron>
				<FormBtn className="login btn-lg">Login</FormBtn>
				<FormBtn className="btn-lg">Register</FormBtn>
				<Footer/>
			</Container>
		);
	};
};

export default Login;