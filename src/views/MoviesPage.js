import React, { Component } from "react";
import { getFilmsByQuery } from "../services/fetchApi";
import FilmList from "../components/FilmList";
export class MoviesPage extends Component {
  state = {
    query: "",
    films: [],
  };

  async componentDidMount() {
    if (this.props.location.state !== null) {
      const response = await getFilmsByQuery(this.props.location.state.query);
      // console.log("MoviesPage", this.props.location.state.query);
      // console.log("MoviesPage", response);
      this.setState({
        films: response.data.results,
        query: this.props.location.state.query,
      });
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const response = await getFilmsByQuery(this.state.query);
    this.setState({ films: response.data.results });
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  render() {
    const { query, films } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={query} onChange={this.handleChange} />
          <button>Search</button>
        </form>
        <FilmList movies={films} history={this.props.history} query={query} />
      </div>
    );
  }
}

export default MoviesPage;
