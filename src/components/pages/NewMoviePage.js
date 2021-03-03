import React, { Component } from 'react'
import NewMovieForm from '../NewMovieForm';
import { connect } from 'react-redux';
import {onNewMovieSubmit} from '../../actions/newMovie';


class NewMoviePage extends Component {

    render() {
        return (
            <div>
                <h2>New Movie</h2>
                <NewMovieForm 
                newMovie = {this.props.newMovie}
                onNewMovieSubmit = {this.props.onNewMovieSubmit}

                />
            </div>
        )
    }
}

const mapStateToProps = ({newMovie}) => {
    return {
        newMovie
    }
};

const mapDispatchToProps = {
    onNewMovieSubmit
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMoviePage, onNewMovieSubmit);