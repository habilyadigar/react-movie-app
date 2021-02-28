import axios from 'axios';
import { API_BASE } from './../config/env';

export function fetchMovies(){
    return  dispatch => {
        axios.get(`${API_BASE}/movies`)
        .then(result => result.data)
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }
}
