import { 
    NEW_MOVIE_PENDING,
    NEW_MOVIE_FULFILLED, 
    NEW_MOVIE_REJECTED,
    
    FETCH_MOVIE_PENDING,
    FETCH_MOVIE_FULFILLED, 
    FETCH_MOVIE_REJECTED

} from '../actions/newMovie';

const initialState = {
    fetching: false,
    fetched: false,
    done: false,
    error: {},
    movie: {
        fetching: false
    }
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
            }
        ///FETCH MOVIE///////
        case FETCH_MOVIE_PENDING:
            return{
                ...state,
                movie: {
                    fetching: true
                }
            }
        case FETCH_MOVIE_FULFILLED:
            return{
                ...state,
                movie: {
                    ...action.payload,
                    fetching: false
                }
            }
        case FETCH_MOVIE_REJECTED:
            return{
                ...state,
                movie: {
                    fetching: false
                }
            }
        default:
            return state;
    };
};

export default newMovie;