import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";


class Helpers extends Component {
	state = {
		helpers: [],
		name: "",
	};

	componentDidMount() {
		this.loadHelpers();
	}

	loadHelpers = () => {
		API.getHelpers()
			.then((res) =>
				this.setState({ helpers: res.data, name: ""})
			)
			.catch((err) => console.log(err));
	};

	deleteHelper = (id) => {
		API.deleteHelper(id)
			.then((res) => this.loadHelpers())
			.catch((err) => console.log(err));
	};

	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = (event) => {
		event.preventDefault();
		if (this.state.name) {
			API.saveHelper({
				name: this.state.name,
			})
				.then((res) => this.loadHelpers())
				.catch((err) => console.log(err));
		}
	};

	render() {
		return (
			<Container fluid>
				<Jumbotron>
					<h1>Helpers</h1>
				</Jumbotron>
				<form>
					<Row>
						<Col size='md-6'>
							<Input
								value={this.state.name}
								onChange={this.handleInputChange}
								name='name'
								placeholder='Add Helper'
							/>
							<FormBtn
						disabled={!(this.state.name)}
						onClick={this.handleFormSubmit}
					>
						Add Helper
					</FormBtn>
						</Col>
					</Row>
					</form>
					{this.state.helpers.length ? (
						<List>
							{this.state.helpers.map((helper) => (
								<ListItem key={helper._id}>
									<Link to={"/helper/" + helper._id}>
										<strong>
											{helper.name}
										</strong>
									</Link>
									<DeleteBtn onClick={() => this.deleteHelper(helper._id)} />
								</ListItem>
							))}
						</List>
					) : (
						<h3>No Helpers assigned</h3>
					)}
			</Container>
		);
	}
}

export default Helpers;
