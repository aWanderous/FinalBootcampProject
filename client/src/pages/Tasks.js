import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import { List, ListItem } from "../components/List";


class Tasks extends Component {
	state = {
		tasks: [],
		taskName: "",
		link: ""
	};

	componentDidMount() {
		this.loadTasks();
	}

	loadTasks = () => {
		API.getTasks()
			.then((res) =>
				this.setState({ tasks: res.data, taskName: ""})
			)
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<Container fluid>
				<Jumbotron>
					To-do List
				</Jumbotron>
					{this.state.tasks.length ? (
						<List>
							{this.state.tasks.map((task) => (
								<ListItem key={task._id}>
									<Link to={task.link ? task.link : "/Task/" + task._id}>
										<strong>
											{task.taskName}
										</strong>
									</Link>
								</ListItem>
							))}
						</List>
					) : (
						<p className="no-data">No set Tasks to Display</p>
					)}
			</Container>
		);
	}
}

export default Tasks;
