import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import DeleteBtn from "../components/DeleteBtn";
import AssignBtn from "../components/AssignBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { List, ListItem } from "../components/List";

class Help extends Component {
  state = {
    helper: {},
    list: {},
    tasks: [],
		taskName: "",
		details: "",
		link: ""

  };
  
  componentDidMount() {
    API.getHelper(this.props.match.params.id)
      .then(res => this.setState({ helper: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.helper.helperName}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h5>Tasks</h5>
              </article>
            </Col>
          </Row>
              {this.state.tasks.length ? (
						<List>
							{this.state.tasks.map((task) => (
								<ListItem key={task._id}>
									<Link to={task.link}>
										<strong>
											{task.taskName}
										</strong>
									</Link>
									<DeleteBtn onClick={() => this.deleteTask(task._id)} />
									<AssignBtn onClick={() => this.addHelper(task._id)} />
								</ListItem>
							))}
						</List>
					) : (
						<h3>No set Tasks to Display</h3>
					)}
        <Row>
          <Col size="md-2">
            <Link to="/Helper">← Back to Helpers</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Help;