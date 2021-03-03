import React from "react";
import { Card, Image, Grid, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const extra = (movie) => {
  return (
    <div className="ui two buttons">
      <Button animated as={Link} to={`/movies/${movie._id}`}>
        <Button.Content visible>Edit</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
      <Button animated="vertical">
        <Button.Content hidden color="red">
          Delete
        </Button.Content>
        <Button.Content visible>
          <Icon name="trash" />
        </Button.Content>
      </Button>
    </div>
  );
};

const MovieCard = ({ movie }) => (
  <Grid.Column>
    <Card>
      <Image src={movie.pic} wrapped ui={true} size="medium" />
      <Card.Content>
        <Card.Header>{movie.title}</Card.Header>
        <Card.Meta>
          <span className="date">{movie.year}</span>
        </Card.Meta>
        <Card.Meta>
          <span>IMDB SCORE: {movie.imdb_score}</span>
        </Card.Meta>
        <Card.Description>
          {movie.director.name} {movie.director.surname}
        </Card.Description>
        <br></br>
        <Card.Meta>{extra(movie)}</Card.Meta>
      </Card.Content>
    </Card>
  </Grid.Column>
);

export default MovieCard;
