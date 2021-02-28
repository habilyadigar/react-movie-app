import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect} from "react-redux";
import MoviesList from './../MoviesList';

import { fetchMovies} from '../../actions/movies'

class MoviesPage extends Component {
    static propTypes = {
        movies: PropTypes.array.isRequired
    };

    componentDidMount = () => {
      this.props.fetchMovies();
    };
    

  render() {
      console.log(this.props)
    return (
      <div>
        <h1>Movies Page</h1>
        <MoviesList movies = {this.props.movies} ></MoviesList>
      </div>
    );
  }
};
const mapStateToProps = ({ movies }) => {
    return {
        movies
    }
};


const mapDispatchToProps = {
    fetchMovies
}

export default connect(mapStateToProps,mapDispatchToProps)(MoviesPage)