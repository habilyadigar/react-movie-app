import { NEW_MOVIE_PENDING,NEW_MOVIE_FULFILLED, NEW_MOVIE_REJECTED } from '../actions/newMovie';

const initialState = {
    fetching: false,
    fetched: false,
    done: false,
    movies: [],
    error: {}
};


const newMovie= (state = initialState, action) =>{
    switch (action.type){
        case NEW_MOVIE_PENDING:
            return{
                ...state,
                fetching: true,
            }
        case NEW_MOVIE_FULFILLED:
            return{
                ...state,
                movies: action.payload,
                fetching: false,
                done: true
            }
        case NEW_MOVIE_REJECTED:
            return{
                ...state,
                error: action.payload,
                fetching: false,
            }
        default:
            return state;
    };
};

export default newMovie;