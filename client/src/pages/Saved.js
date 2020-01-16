import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import { List, ListItem } from "../components/List";


class Saved extends Component {
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
				this.setState({ lists: res.data, task: "", assigned: [], details: "" })
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
						{this.state.lists.length ? (
							<List>
								{this.state.lists.map((list) => (
									<ListItem key={list._id}>
										<Link to={"/Tasks/" + list._id}>
											<strong>
												{list.task} done by {list.assigned}
											</strong>
										</Link>
										<DeleteBtn onClick={() => this.deleteTask(list._id)} />
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

export default Saved;
