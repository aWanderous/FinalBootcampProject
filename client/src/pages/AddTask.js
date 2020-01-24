import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";

class InForm extends Component {
	state = {
		tasks: [],
		taskName: "",
		helper: "",
		details: "",
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
				helperName: this.state.helperName,
				details: this.state.details,
			})
				.then((res) => this.loadTasks())
				.catch((err) => console.log(err));
		}
	};

	render() {
		return (
			<Container fluid>
				<Jumbotron>
					Adding a task
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

export default InForm;