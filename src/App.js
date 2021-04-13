import React, { Component } from "react";
import axios from "axios";
import { CardList } from "./components/card-list/card.list.component";
import SearchBar from "./components/search-bar/searchbar.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: null,
      value: "",
    };
  }

  //after typing in rendering movies
  search = async val => {
    this.setState({ loading: true });
    if (val.length > 0) {
      const res = await axios(
        `https://api.themoviedb.org/3/search/movie?query=${val}&api_key=${process.env.REACT_APP_API_KEY}`
      );
      const movies = await res.data.results;

      this.setState({ movies, loading: false });
    }
  };

  //tracking search-bar change
  onChangeHandler = async e => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };

  get renderMovies() {
    let movies;
    if (this.state.movies) {
      movies = <CardList movie={this.state.movies} />;
    }
    return movies;
  }
  //before typing in rendering movies
  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=A&page=1&2&3&include_adult=false`
    )
      .then(response => response.json())
      .then(users => this.setState({ movies: users.results }));
  }

  render() {
    return (
      <div>
        <h1>Search Movies</h1>
        <SearchBar
          placeholder="Search Movies"
          onChangeHandler={this.onChangeHandler}
          value={this.state.value}
        />
        {this.renderMovies}
      </div>
    );
  }
}

export default App;
