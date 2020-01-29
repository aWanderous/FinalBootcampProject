import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import RemoveBtn from "../components/RemoveBtn";


class Songs extends Component {
	state = {
		songs: [],
        title: "",
        artist: "",
	};

	componentDidMount() {
		this.loadSongs();
	}

	loadSongs = () => {
		API.getSongs()
			.then((res) =>
				this.setState({ songs: res.data})
			)
			.catch((err) => console.log(err));
	};

	deleteSong = (id) => {
		API.deleteSong(id)
			.then((res) => this.loadSongs())
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
		if (this.state.title && this.state.artist) {
			API.saveSong({
                title: this.state.title,
                artist: this.state.artist,
			})
				.then((res) => this.loadSongs())
				.catch((err) => console.log(err));
		}
	};

	render() {
		return (
			<Container fluid>
				<Jumbotron>
					Songs Playlist
				</Jumbotron>
				<form>
					<Row>
						<Col size='md-6'>
							<Input
								value={this.state.title}
								onChange={this.handleInputChange}
								name='title'
								placeholder='Song title'
							/>
                            <Input
								value={this.state.artist}
								onChange={this.handleInputChange}
								name='artist'
								placeholder='Performing artist'
							/>
							<FormBtn
								disabled={!(this.state.title && this.state.artist)}
								onClick={this.handleFormSubmit}
							>
								Add Song
							</FormBtn>
						</Col>
					</Row>
				</form>
				{this.state.songs.length ? (
					<List>
						{this.state.songs.map((song) => (
							<ListItem key={song._id}>
								<strong>
									{song.title} by {song.artist}
								</strong>
								<RemoveBtn onClick={() => this.deleteSong(song._id)} />
							</ListItem>
						))}
					</List>
				) : (
					<p className="no-data">No Songs added to Playlist</p>
				)}
			</Container>
		);
	};
};

export default Songs;
