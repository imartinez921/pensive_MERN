import {
    RECEIVE_DEFINITIONS,
  } from "../actions/dictionary_actions.js";  
import {
    CLEAR_QUERIES,
} from '../actions/query_actions'
    
const queryReducer = (state = [], action) => {
    Object.freeze(state);
    let newState = Object.assign([], state);

    switch (action.type) {
    case RECEIVE_DEFINITIONS:
        return newState.concat([action.definitions[0].word]);
    case CLEAR_QUERIES:
        return [];
    default:
        return state;
    }
};

export default queryReducer;