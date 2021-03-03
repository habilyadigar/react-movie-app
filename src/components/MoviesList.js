import React from "react";
import PropTypes from "prop-types";
import MovieCard from './MovieCard';
import {Grid} from 'semantic-ui-react';
import CircleLoader from "react-spinners/CircleLoader";


const MoviesList = ({ movies, deleteMovie }) => {
  const emptyMessage = <p> There are no movies yet.</p>;
  const moviesList = (
    <div>
        <CircleLoader color={'#160E38'} loading={movies.fetching} size={40} />

      {movies.error.response ? (
        <h3>ERROR RETRIEVING DATA!</h3>
      ) : (
        <Grid stackable columns={3}>
        {movies.movieList.map((movie) => 
          <MovieCard 
          key = {movie._id} 
          deleteMovie = {deleteMovie}
          movie = {movie}
          />)}
        </Grid>
      )}
    </div>
  );
  return <div>{movies.length === 0 ? emptyMessage : moviesList}</div>;
};

MoviesList.propTypes = {
  movies: PropTypes.shape({
    movieList: PropTypes.array.isRequired,
  }).isRequired,
};

export default MoviesList;
