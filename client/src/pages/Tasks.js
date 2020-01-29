import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import { Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import DollarIcon from "../components/DollarIcon";
import AssignIcon from "../components/AssignedIcon";

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
								{task.helper ? (
									<AssignIcon/>
								) : (
									""
								)}
								{task.cost ? (
									<DollarIcon/>
								) : (
									""
								)}
							</ListItem>
						))}
					</List>
				) : (
					<p className="no-data">No set Tasks to Display</p>
				)}
			</Container>
		);
	};
};

export default Tasks;
