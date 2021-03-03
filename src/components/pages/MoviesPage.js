import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect} from "react-redux";
import MoviesList from './../MoviesList';

import { 
  fetchMovies,
  deleteMovie
} from '../../actions/movies'

class MoviesPage extends Component {
    static propTypes = {
        movies: PropTypes.object.isRequired,
        deleteMovie: PropTypes.func.isRequired
    };

    componentDidMount = () => {
      this.props.fetchMovies();
    };
    

  render() {
      //console.log(this.props)
    return (
      <div>
        <h1>Movies</h1>
        <MoviesList 
        deleteMovie = {this.props.deleteMovie}
        movies = {this.props.movies} 
        ></MoviesList>
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
    fetchMovies,
    deleteMovie
}

export default connect(mapStateToProps,mapDispatchToProps)(MoviesPage)