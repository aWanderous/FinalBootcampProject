import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import { Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import AssignIcon from"../components/AssignedIcon";

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
				<List>
					{this.state.tasks.map((task) => (
						<ListItem key={task._id}>
							<Link to={"/Task/" + task._id}>
								<strong>
									{task.cost ? (
        								task.taskName + " costs $" + task.cost
            						) : (
										task.taskName + " not priced yet."
					                )}
								</strong>
							</Link>
							{task.helper ? (
								<AssignIcon/>
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

export default Cost;