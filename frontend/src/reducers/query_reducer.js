import {
    RECEIVE_DEFINITIONS,
    RECEIVE_SYNONYMS,
  } from "../actions/dictionary_actions.js";  
import {
   CLEAR_QUERIES,
} from '../actions/query_actions'
    
const queryReducer = (prevState = [], action) => {
    Object.freeze(prevState);
    let newState = Object.assign([], prevState);

    let query;
    switch (action.type) {
    case RECEIVE_DEFINITIONS:
        query = action.definitions[0].word
        if (!newState.includes(query)) {
            newState.push(query);
        }
        return newState;
    case RECEIVE_SYNONYMS:
        query = action.synonyms.query
        if (!newState.includes(query)) {
            newState.push(query);
        }
        return newState;
    case CLEAR_QUERIES:
        return [];
    default:
        return prevState;
    }
};

export default queryReducer;