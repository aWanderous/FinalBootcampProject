import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import { List, ListItem } from "../components/List";


class Helpers extends Component {
	state = {
		list: [],
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
				this.setState({ list: res.data, task: "", assigned: "", details: "" })
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
			API.saveTask({
				task: this.state.task,
				assigned: this.state.assigned,
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
						{this.state.list.length ? (
							<List>
								{this.state.list.map((task) => (
									<ListItem key={task._id}>
										<Link to={"/Tasks/" + task._id}>
											<strong>
												{task.assigned}
											</strong>
										</Link>
										<DeleteBtn onClick={() => this.deleteTask(task._id)} />
									</ListItem>
								))}
							</List>
						) : (
							<h3>No Helpers to Display</h3>
						)}
			</Container>
		);
	}
}

export default Helpers;