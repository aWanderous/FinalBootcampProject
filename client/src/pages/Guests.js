import React, { Component } from "react";
import RemoveBtn from "../components/RemoveBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";


class Guests extends Component {
	state = {
		guests: [],
		GuestName: "",
	};

	componentDidMount() {
		this.loadGuests();
	}

	loadGuests = () => {
		API.getGuests()
			.then((res) =>
				this.setState({ guests: res.data})
			)
			.catch((err) => console.log(err));
	};

	deleteGuest = (id) => {
		API.deleteGuest(id)
			.then((res) => this.loadGuests())
			.catch((err) => console.log(err));
	};

	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = (event) => {
		event.preventDefault();
		window.location.reload(false);
		if (this.state.guestName) {
			API.saveGuest({
				guestName: this.state.guestName,
			})
				.then((res) => this.loadGuests())
				.catch((err) => console.log(err));
		}
	};

	render() {
		return (
			<Container fluid>
				<Jumbotron>
					Invited Guests
				</Jumbotron>
					<form>
					<Row>
						<Col size='md-6'>
							<Input
								value={this.state.guestName}
								onChange={this.handleInputChange}
								name='guestName'
								placeholder='Add Guest'
							/>
							<FormBtn
						disabled={!(this.state.guestName)}
						onClick={this.handleFormSubmit}
					>
						Add Guest
					</FormBtn>
						</Col>
					</Row>
					</form>
					{this.state.guests.length ? (
						<List>
							{this.state.guests.map((guest) => (
								<ListItem key={guest._id}>
										<strong>
											{guest.guestName}
										</strong>
									<RemoveBtn onClick={() => this.deleteGuest(guest._id)} />
								</ListItem>
							))}
						</List>
					) : (
						<h3>No Guests Invited</h3>
					)}
			</Container>
		);
	}
}

export default Guests;
