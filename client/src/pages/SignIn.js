import React, { Component } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import {Container } from "../components/Grid";
import { FormBtn } from "../components/Form";
import Footer from "../components/Footer";

class SignIn extends Component {
	
	render() {
		return (
			<Container fluid>
				<Jumbotron>
					Sign in
				</Jumbotron>
				<Link to={"/Login/"}>
					<FormBtn className="login btn-lg">Login</FormBtn>
				</Link>
				<Link to={"/Register/"}>
					<FormBtn className="btn-lg">Register</FormBtn>
				</Link>
				<Footer/>
			</Container>
		);
	};
};

export default SignIn;