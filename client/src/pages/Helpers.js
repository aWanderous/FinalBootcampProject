import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import { Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import DollarIcon from "../components/DollarIcon";

class Helper extends Component {
	state = {
		tasks: [],
		taskName: "",
    	helper: ""
	};

	componentDidMount() {
		this.loadTasks();
	}

	loadTasks = () => {
		API.getTasks()
			.then((res) =>
				this.setState({ tasks: res.data, taskName: "", helper: "" })
			)
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<Container fluid>
				<Jumbotron>
					Assigning of Tasks
				</Jumbotron>
				<List>
					{this.state.tasks.map((task) => (
						<ListItem key={task._id}>
							<Link to={"/Task/" + task._id}>
								<strong>
									{task.helper ? (
										task.taskName + " assign to " + task.helper
									) : (
										task.taskName + ", has yet to be assign to anyone."
									)}
								</strong>
							</Link>
							{task.cost ? (
								<DollarIcon/>
							) : (
								""
							)}
						</ListItem>
					))}
				</List>
			</Container>
		);
	};
};

export default Helper;
