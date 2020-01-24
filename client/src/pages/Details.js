import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Input } from "../components/Form";
import DeleteBtn from "../components/DeleteBtn";
import UpdateBtn from "../components/UpdateBtn";

class Details extends Component {
  state = {
    task: {}
  };
  
  componentDidMount() {
    API.getTask(this.props.match.params.id)
    .then(res => this.setState({ task: res.data}))
    .catch(err => console.log(err));
  };
  
  handleChange(event) {
    var newState = {};
    newState[event.target.type] = event.target.value;
    this.setState(newState);
  };
  
  deleteHelper = () => {	
    window.location.reload(false);
			API.updateTask(this.props.match.params.id,{ helper: ""})
				.then((res) => this.loadTasks())
        .catch((err) => console.log(err));
  };

  deleteCost = () => {	
    window.location.reload(false);
			API.updateTask(this.props.match.params.id,{ cost: ""})
				.then((res) => this.loadTasks())
        .catch((err) => console.log(err));
  };

  updateTask = () => {
    window.location.reload(false);
		if (this.state.helper || this.state.cost) {
			API.updateTask(this.props.match.params.id,{ helper: this.state.helper, cost: this.state.cost })
				.then((res) => this.loadTasks())
				.catch((err) => console.log(err));
		}
	};
  
  handleInputChange = (event) => {
    console.log(event.target)
		const { name, value } = event.target;
		this.setState({
			[name]: value
    });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
                {this.state.task.taskName}
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h4>
                {this.state.task.helper ? (
                "Assign to " + this.state.task.helper
                ) : (
                  "Task not yet assigned."                 
                )}
                </h4>
            </article>
          </Col>
        </Row>
        <form>
					<Row>
						<Col size='md-6'>
							<Input
								value={this.state.helper}
								onChange={this.handleInputChange}
								name='helper'
								placeholder='Add A Helper'
							/>
              <DeleteBtn onClick={() => this.deleteHelper(this.state.helper)} />									
							<UpdateBtn onClick={() => this.updateTask(this.state.helper)} />
						</Col>
					</Row>
					</form>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h3>Details</h3>
              <p>
                {this.state.task.details}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h5>Costs</h5>
              <p>
              {this.state.task.cost ? (
                "$" + this.state.task.cost
                ) : (
                  "Cost not yet determined."                 
                )}
              </p>
            </article>
          </Col>
        </Row>
        <form>
					<Row>
						<Col size='md-6'>
							$<Input
								value={this.state.cost}
								onChange={this.handleInputChange}
								name='cost'
								placeholder='cost'
							/>
              <DeleteBtn onClick={() => this.deleteCost(this.state.cost)} />									
							<UpdateBtn onClick={() => this.updateTask(this.state.cost)} />
						</Col>
					</Row>
				</form>
      </Container>
    );
  }
}

export default Details;