import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import AssignBtn from "../components/AssignBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import { List, ListItem } from "../components/List";


class Tasks extends Component {
	state = {
		tasks: [],
		taskName: "",
		details: "",
		link: ""
	};

	componentDidMount() {
		this.loadTasks();
	}

	loadTasks = () => {
		API.getTasks()
			.then((res) =>
				this.setState({ tasks: res.data, taskName: "", details: "" })
			)
			.catch((err) => console.log(err));
	};

	deleteTask = (id) => {
		API.deleteTask(id)
			.then((res) => this.loadTasks())
			.catch((err) => console.log(err));
	};

	addHelper = (id) => {
		API.addHelper(id);
	} 

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
				details: this.state.details
			})
				.then((res) => this.loadTasks())
				.catch((err) => console.log(err));
		}
	};

	render() {
		return (
			<Container fluid>
				<Jumbotron>
					<h1>The to-do List</h1>
				</Jumbotron>
					{this.state.tasks.length ? (
						<List>
							{this.state.tasks.map((task) => (
								<ListItem key={task._id}>
									<Link to={task.link}>
										<strong>
											{task.taskName}
										</strong>
									</Link>
									<DeleteBtn onClick={() => this.deleteTask(task._id)} />
									<AssignBtn onClick={() => this.addHelper(task._id)} />
								</ListItem>
							))}
						</List>
					) : (
						<h3>No set Tasks to Display</h3>
					)}
			</Container>
		);
	}
}

export default Tasks;
