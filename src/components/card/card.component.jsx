import axios from "axios";
import React, { Component } from "react";
import "./card.style.scss";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imdb: null,
      movies: this.props.movie.id,
    };
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/${this.state.movies}/external_ids?api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then(response => response.json())
      .then(users => this.setState({ imdb: users.imdb_id }));
  }

  render() {
    return (
      <a
        href={`https://www.imdb.com/title/${this.state.imdb}/`}
        target="_blank"
        rel="noreferrer"
      >
        <div className="card-container">
          <img
            src={`https://image.tmdb.org/t/p/w300${this.props.movie.poster_path}`}
            alt="movie-poster"
          ></img>
          <h1>{this.props.movie.title}</h1>
          <h4>{this.props.movie.vote_average}</h4>
          <p>{this.props.movie.overview}</p>
        </div>
      </a>
    );
  }
}
