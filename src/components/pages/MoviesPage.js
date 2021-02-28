import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect} from "react-redux";
import MoviesList from './../MoviesList';


class MoviesPage extends Component {
    static propTypes = {
        movies: PropTypes.array.isRequired
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




export default connect(mapStateToProps)(MoviesPage)