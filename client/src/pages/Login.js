import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";

class Login extends Component {
	state = {
		lists: [],
		task: "",
		assigned: [],
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
					lists: res.data,
					assigned: [],
					task: "",
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
		if (this.state.task && this.state.details) {
			API.saveTasks({
				task: this.state.tasks,
				assigned: this.state.assigned,
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
								value={this.state.task}
								onChange={this.handleInputChange}
								name='task'
								placeholder='Task Name (required)'
							/>
						</Col>
						<Col size='md-6'>
							<Input
								value={this.state.assigned}
								onChange={this.handleInputChange}
								name='assigned'
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
						disabled={!(this.state.task && this.state.details)}
						onClick={this.handleFormSubmit}
					>
						Add Task
					</FormBtn>
				</form>
			</Container>
		);
	}
}

export default Login;