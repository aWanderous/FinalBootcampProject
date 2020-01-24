import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import { List, ListItem } from "../components/List";


class Cost extends Component {
	state = {
		tasks: [],
		taskName: "",
    	cost: ""
	};

	componentDidMount() {
		this.loadTasks();
	}

	loadTasks = () => {
		API.getTasks()
			.then((res) =>
				this.setState({ tasks: res.data, taskName: "", cost: "" })
			)
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<Container fluid>
				<Jumbotron>
					Costs of Tasks
				</Jumbotron>
					{this.state.tasks.length ? (
						<List>
							{this.state.tasks.map((task) => (
								<ListItem key={task._id}>
									<Link to={"/Task/" + task._id}>
										<strong>
											{task.taskName} costs ${task.cost}
										</strong>
									</Link>
								</ListItem>
							))}
						</List>
					) : (
						<h3>No Payments</h3>
					)}
			</Container>
		);
	}
}

export default Cost;
