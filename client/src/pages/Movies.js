import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";


class Movies extends Component {
	state = {
		movies: [],
		title: "",
		director: "",
		cast: [],
		image: "",
		link: "",
		plot: ""
	};

	componentDidMount() {
		this.loadMovies();
	}

	loadMovies = () => {
		API.getMovies()
			.then((res) =>
				this.setState({ movies: res.data, title: "", director: "", cast: "", image: "", link: "", plot: "" })
			)
			.catch((err) => console.log(err));
	};

	deleteMovie = (id) => {
		API.deleteMovie(id)
			.then((res) => this.loadMovies())
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
		if (this.state.title && this.state.director) {
			API.saveMovie({
				title: this.state.title,
				director: this.state.director,
				cast: this.state.cast,
				image: this.state.image,
				link: this.state.link,
				plot: this.state.plot,
			})
				.then((res) => this.loadMovies())
				.catch((err) => console.log(err));
		}
	};

	render() {
		return (
			<Container fluid>
				<Jumbotron>
					<h1>Where are you looking to rent?</h1>
				</Jumbotron>
				<form>
					<Row>
						<Col size="md-6">
							<Input
								value={this.state.title}
								onChange={this.handleInputChange}
								name='title'
								placeholder='Title (required)'
							/>
						</Col>
						<Col size="md-6">
							<Input
								value={this.state.director}
								onChange={this.handleInputChange}
								name='director'
								placeholder='Director (required)'
							/>
						</Col>
					</Row>
					<Input
						value={this.state.cast}
						onChange={this.handleInputChange}
						name='cast'
						placeholder='Cast (optional)'
					/>
					<Row>
					<Col size="md-6">
						<Input
							value={this.state.image}
							onChange={this.handleInputChange}
							name='image'
							placeholder='Image (required)'
						/>
						</Col>
						<Col size="md-6">
						<Input
							value={this.state.link}
							onChange={this.handleInputChange}
							name='link'
							placeholder='Link (required)'
						/>
						</Col>
					</Row>
					<TextArea
						value={this.state.plot}
						onChange={this.handleInputChange}
						name='plot'
						placeholder='Plot (required)'
					/>
					<FormBtn
						disabled={!(this.state.director && this.state.title)}
						onClick={this.handleFormSubmit}
						>
						Submit Movie
					</FormBtn>
				</form>
			</Container>
		);
	}
}

export default Movies;
