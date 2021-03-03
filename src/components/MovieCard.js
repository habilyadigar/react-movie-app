import React from 'react'
import { Card, Image, Grid } from 'semantic-ui-react'

const MovieCard = ({movie}) => (
    <Grid.Column>
  <Card>
    <Image src={movie.pic} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{movie.title}</Card.Header>
      <Card.Meta>
        <span className='date'>{movie.year}</span>
      </Card.Meta>
      <Card.Meta>
        <span className='date'>IMDB SCORE: {movie.imdb_score}</span>
      </Card.Meta>
      <Card.Description>
        {movie.director.name} {movie.director.surname}
      </Card.Description>
    </Card.Content>

  </Card>
  </Grid.Column>
)

export default MovieCard

