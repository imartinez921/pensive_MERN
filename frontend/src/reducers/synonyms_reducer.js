import {
    RECEIVE_DEFINITIONS,
    RECEIVE_SYNONYMS,
  } from "../actions/dictionary_actions.js";
  import {
    CLEAR_QUERIES,
  } from '../actions/query_actions'
  import {
    RECEIVE_DICTIONARY_ERROR,
  } from "../actions/dictionary_actions.js";
  
    
const synonymsReducer = (state = [], action) => {
    Object.freeze(state);
    let newState = Object.assign([], state);

    switch (action.type) {
    case RECEIVE_SYNONYMS:
        newState = []; // start with cleared newState
        // action.synonyms is an ARRAY of synonym words
        newState.push(
            (action.synonyms.relationshipType+'s').toUpperCase()
        )
        for (let i = 0; i < action.synonyms.words.length; i++) {
            const syn = action.synonyms.words[i]
            if (syn[0] !== syn[0].toUpperCase()) newState.push(action.synonyms.words[i])
        }
        console.log('NEWSTATE', newState)
        return newState;
    case RECEIVE_DEFINITIONS:
        return [];
    case RECEIVE_DICTIONARY_ERROR:
        return [];
    case CLEAR_QUERIES:
        return [];
    default:
        return state;
        
    }
};

export default synonymsReducer;