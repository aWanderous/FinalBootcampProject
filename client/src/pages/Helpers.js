import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import { List, ListItem } from "../components/List";


class Helpers extends Component {
	state = {
		lists: [],
		assigned: [],
	};

	componentDidMount() {
		this.loadTasks();
	}

	loadTasks = () => {
		API.getTasks()
			.then((res) =>
				this.setState({ lists: res.data, assigned: []})
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
					<h1>Helpers</h1>
				</Jumbotron>
					{this.state.lists.length ? (
						<List>
							{this.state.lists.map((list) => (
								<ListItem key={list._id}>
									<Link to={"/Task/" + list._id}>
										<strong>
											{list.assigned}
										</strong>
									</Link>
									<DeleteBtn onClick={() => this.deleteTask(list._id)} />
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
