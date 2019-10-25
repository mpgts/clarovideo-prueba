import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = ( state, action ) => {
    if( action.type === "LOAD_MOVIES" ) {
        return {
            ...state,
            movies: action.movies
        };
    }else if( action.type === "LOAD_DETAIL" ) {
        return {
            ...state,
            detail: action.detail
        };
    }else if( action.type === "SET_TXT_BUSQ" ) {
        return {
            ...state,
            txtBusq: action.txtBusq
        };
    }

    return state;
};

const logger = store => next => action => {
    let result = next(action);
    return result;
};

export default createStore(reducer, { movies: [], detail: []}, applyMiddleware(logger, thunk));