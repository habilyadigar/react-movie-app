import React, { Component } from "react";
import { Button, Form, Image, Message } from "semantic-ui-react";
import { InLineError } from "./InLineError";
import { PropTypes } from "prop-types";
import { Redirect } from "react-router-dom";

export default class NewMovieForm extends Component {
  state = {
    _id: this.props.movie ? this.props.movie._id : '',
    title: this.props.movie ? this.props.movie.title : '',
    pic: this.props.movie ? this.props.movie.pic : '',
    errors: {},
    redirect : false,
  };

  static propTypes = {
    onNewMovieSubmit: PropTypes.func.isRequired,
  };


  UNSAFE_componentWillReceiveProps (nextProps) {
    const { movie } = nextProps.newMovie;
    if (movie.title && movie.title !== this.state.title) {
        this.setState({
          pic: movie.pic,
          title: movie.title,
        });
      };
    };
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = () => {
    const errors = this.validate();
    this.setState({
      errors,
      redirect : true,
    });

    const _id = this.state._id || this.props.newMovie.movie._id;
    if (Object.keys(errors).length === 0) {
      if (!_id)
        this.props.onNewMovieSubmit(this.state);
      else 
        this.props.onUpdateMovieSubmit({...this.state, _id});  
    } 
  };

  validate = () => {
    const errors = {};
    if (!this.state.title) errors.title = "Title can't blank.";
    if (!this.state.pic) errors.pic = "Picture URL can't blank.";
    return errors;
  };

  render() {
    const { errors } = this.state;
    const form = (
      <Form onSubmit={this.onSubmit} loading={this.props.newMovie.fetching || this.props.newMovie.movie.fetching}>
        <Form.Field error={!!errors.title}>
          <label>Movie Name</label>
          {errors.title && <InLineError message={errors.title} />}
          <input
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Movie Name"
          />
        </Form.Field>
        <Form.Field error={!!errors.pic}>
          <label>PIC URL</label>
          {errors.pic && <InLineError message={errors.pic} />}
          <input
            id="pic"
            name="pic"
            value={this.state.pic}
            onChange={this.handleChange}
            placeholder="Pic URL"
          />
        </Form.Field>
        <Image src={this.state.pic} size="small" />
        <div className="clearfix"></div>
        <br></br>
        <Button type="submit">Submit</Button>
        {this.props.newMovie.error.message && (
          <Message negative>
            <Message.Header>We're sorry :,(</Message.Header>
            <p>A problem occurred while add a movie</p>
            <p>The problem is: {this.props.newMovie.error.message}</p>
          </Message>
        )}
      </Form>
    );
    return (
    <div>
      {
        this.props.newMovie.done && this.state.redirect 
        ? <Redirect to = "/movies" /> : form  
      }
    </div>
    );
  }
}
