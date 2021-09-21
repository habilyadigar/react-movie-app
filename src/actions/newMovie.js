import axios from 'axios';
import { API_BASE } from '../config/env';

export const NEW_MOVIE_PENDING = 'NEW_MOVIE_PENDING'
export const NEW_MOVIE_FULFILLED = "NEW_MOVIE_FULFILLED"
export const NEW_MOVIE_REJECTED = "NEW_MOVIE_REJECTED"

export const FETCH_MOVIE_PENDING = 'FETCH_MOVIE_PENDING'
export const FETCH_MOVIE_FULFILLED = "FETCH_MOVIE_FULFILLED"
export const FETCH_MOVIE_REJECTED = "FETCH_MOVIE_REJECTED"

export const UPDATE_MOVIE_PENDING = 'UPDATE_MOVIE_PENDING'
export const UPDATE_MOVIE_FULFILLED = "UPDATE_MOVIE_FULFILLED"
export const UPDATE_MOVIE_REJECTED = "UPDATE_MOVIE_REJECTED"

export function onNewMovieSubmit({title, pic}){
    return  dispatch => {
        dispatch({
            type: "NEW_MOVIE",
            payload: axios.post(`${API_BASE}/movies/new`,{
                title,
                pic
            })
        });
    }
}

export function onUpdateMovieSubmit({_id, title, pic}){
  return  dispatch => {
      dispatch({
          type: "NEW_MOVIE",
          payload: axios.put(`${API_BASE}/movies/${_id}`,{
              title,
              pic
          })
      });
  }
}

export function fetchMovie(id){
    return  dispatch => {
        dispatch({
            type: "FETCH_MOVIE",
            payload: axios.get(`${API_BASE}/movies/${id}`)
            .then(result => result.data)
            .catch(function (error) {
              if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
              console.log(error.config);
            })
        });
    }
}

