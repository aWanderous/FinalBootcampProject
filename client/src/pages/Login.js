import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";

class Login extends Component {
	state = {
		tasks: [],
		taskName: "",
		helper: "",
		details: "",
		link: ""
	};

	componentDidMount() {
		this.loadTasks();
	}

	loadTasks = () => {
		API.getTasks()
			.then((res) =>
				this.setState({
					tasks: res.data,
					taskName: "",
					helper: "",
					details: "",
					link: ""
				})
			)
			.catch((err) => console.log(err));
	};

	deleteTask = (id) => {
		API.deleteTask(id)
			.then((res) => this.loadTasks())
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
		if (this.state.taskName && this.state.details) {
			API.saveTasks({
				taskName: this.state.taskName,
				helper: this.state.helper,
				details: this.state.details,
				link: this.state.link
			})
				.then((res) => this.loadTasks())
				.catch((err) => console.log(err));
		}
	};

	render() {
		return (
			<Container fluid>
				<Jumbotron>
					<h1>Adding a task</h1>
				</Jumbotron>
				<form>
					<Row>
						<Col size='md-6'>
							<Input
								value={this.state.taskName}
								onChange={this.handleInputChange}
								name='taskName'
								placeholder='Task Name (required)'
							/>
						</Col>
						<Col size='md-6'>
							<Input
								value={this.state.helper}
								onChange={this.handleInputChange}
								name='helper'
								placeholder='Assigned to (optional)'
							/>
						</Col>
					</Row>
					<Row>
						<Col size='md-6'>
							<Input
								value={this.state.link}
								onChange={this.handleInputChange}
								name='link'
								placeholder='Link (required)'
							/>
						</Col>
					</Row>
					<TextArea
						value={this.state.details}
						onChange={this.handleInputChange}
						name='details'
						placeholder='details (required)'
					/>
					<FormBtn
						disabled={!(this.state.taskName && this.state.details)}
						onClick={this.handleFormSubmit}
					>
					<Link to="/Task">
						Add Task
					</Link>
					</FormBtn>
				</form>
			</Container>
		);
	}
}

export default Login;