import {
    RECEIVE_DEFINITIONS,
  } from "../actions/dictionary_actions.js";  
import {
   CLEAR_QUERIES,
} from '../actions/query_actions'
    
const queryReducer = (prevState = [], action) => {
    Object.freeze(prevState);
    let newState = Object.assign([], prevState);

    switch (action.type) {
    case RECEIVE_DEFINITIONS:
        const query = action.definitions[0].word
        console.log('HERE IS YOUR QUERY', query)
        if (!newState.includes(query)) {
            newState.push(query);
            console.log('ADDING TO QUERIES', newState)
        }
        return newState;
    case CLEAR_QUERIES:
        return [];
    default:
        return prevState;
    }
};

export default queryReducer;