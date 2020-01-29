import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Input, TextArea, } from "../components/Form";
import RemoveBtn from "../components/RemoveBtn";
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

  deleteNote = () => {	
    window.location.reload(false);
			API.updateTask(this.props.match.params.id,{ note: ""})
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
		if (this.state.helper || this.state.cost || this.state.note) {
			API.updateTask(this.props.match.params.id,{ helper: this.state.helper, cost: this.state.cost, note: this.state.note })
				.then((res) => this.loadTasks())
				.catch((err) => console.log(err));
		}
	};
  
  handleInputChange = (event) => {
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
          <Col size="md-12 md-offset-1">
            <article>
              <p className="sub-title">Details</p>
              <p>
                {this.state.task.details}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-6 md-offset-1">
            <article>
              <p className="sub-title">
                {this.state.task.helper ? (
                "Assign to " + this.state.task.helper
                ) : (
                  "Task not yet assigned."                 
                )}
                </p>
            </article>
        <form>
							<Input
								value={this.state.helper}
								onChange={this.handleInputChange}
								name='helper'
								placeholder='Add A Helper'
							/>
              <RemoveBtn onClick={() => this.deleteHelper(this.state.helper)} />									
							<UpdateBtn onClick={() => this.updateTask(this.state.helper)} />
					</form>
						</Col>
          <Col size="md-6 md-offset-1">
            <article>
              <p className="sub-title">
              {this.state.task.cost ? (
                "This costs : $" + this.state.task.cost
                ) : (
                  "Cost not yet determined."                 
                )}
              </p>
            </article>
        <form>
							<Input
								value={this.state.cost}
								onChange={this.handleInputChange}
								name='cost'
								placeholder='cost'
							/>
              <RemoveBtn onClick={() => this.deleteCost(this.state.cost)} />									
							<UpdateBtn onClick={() => this.updateTask(this.state.cost)} />
          </form>
						</Col>
					</Row>
          <Row>
          <Col size="md-6">
            <p className="sub-title">
              Notes
            </p>
            <p>
          {this.state.task.note ? (
           this.state.task.note
                ) : (
                  ""                 
                )}
                </p>
          </Col>
            <Col size="md-6">
          <TextArea
						value={this.state.note}
						onChange={this.handleInputChange}
						name='note'
						placeholder='notes on your wedding'
					/>
					<RemoveBtn onClick={() => this.deleteNote(this.state.note)} />									
							<UpdateBtn onClick={() => this.updateTask(this.state.note)} />
          </Col>
          </Row>
      </Container>
    );
  }
}

export default Details;