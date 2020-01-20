import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import { List, ListItem } from "../components/List";


class Cost extends Component {
	state = {
		lists: [],
		task: "",
    	cost: ""
	};

	componentDidMount() {
		this.loadTasks();
	}

	loadTasks = () => {
		API.getTasks()
			.then((res) =>
				this.setState({ lists: res.data, task: "", cost: "" })
			)
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<Container fluid>
				<Jumbotron>
					<h1>Costs of Tasks</h1>
				</Jumbotron>
					{this.state.lists.length ? (
						<List>
							{this.state.lists.map((list) => (
								<ListItem key={list._id}>
									<Link to={"/Task/" + list._id}>
										<strong>
											{list.task} costs ${list.cost}
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
