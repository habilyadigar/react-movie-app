import React, { Component } from "react";
import { Button, Form, Image, Message } from "semantic-ui-react";
import { InLineError } from "./InLineError";
import { PropTypes } from "prop-types";
import { Redirect } from "react-router-dom";

export default class NewMovieForm extends Component {
  state = {
    title: "",
    pic: "",
    errors: {},
  };

  static propTypes = {
    onNewMovieSubmit: PropTypes.func.isRequired,
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
    });
    if (Object.keys(errors).length === 0) {
      this.props.onNewMovieSubmit(this.state);
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
      <Form onSubmit={this.onSubmit} loading={this.props.newMovie.fetching}>
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
        this.props.newMovie.done ? <Redirect to = "/movies"/> : form  
      }
    </div>
    );
  }
}
