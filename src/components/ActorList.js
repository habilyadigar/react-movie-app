import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export const ActorList = (props) => {
  return (
    <div>
      <Grid stackable columns={3}>
        {movies.movieList.map((movie) => (
          <MovieCard key={movie._id} deleteMovie={deleteMovie} movie={movie} />
        ))}
      </Grid>
    </div>
  );
};

ActorList.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ActorList);
