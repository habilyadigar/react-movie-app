import React from "react";
import PropTypes from "prop-types";
import { Card, Grid } from "semantic-ui-react";

export const ActorList = (props) => {
  return (
    <div>
      <Grid stackable columns={4}>
        {props.actors.map((actor, key) => (
          <Grid.Column key={key}>
            <Card>
              <Card
                image={actor.photo}
                header={actor.name}
                extra={actor.description}
              />
            </Card>
          </Grid.Column>
        ))}
      </Grid>
    </div>
  );
};

ActorList.propTypes = {
  actors: PropTypes.array.isRequired,
};

export default ActorList;
