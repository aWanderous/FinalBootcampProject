import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import { List, ListItem } from "../components/List";


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
								</ListItem>
							))}
						</List>
			</Container>
		);
	}
}

export default Helper;
