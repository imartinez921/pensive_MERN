import {
    RECEIVE_DICTIONARY_ERROR,
    CLEAR_DICTIONARY_ERRORS,
    RECEIVE_DEFINITIONS,
    RECEIVE_SYNONYMS,
  } from "../actions/dictionary_actions.js";
    
const dictionaryErrorReducer = (prevState = [], action) => {
    Object.freeze(prevState);
    let newState = Object.assign([], prevState);

    switch (action.type) {
    case RECEIVE_DICTIONARY_ERROR:
        newState = [];
        newState.push(action.error.message+'! Please check your spelling.');
        return newState;
    case RECEIVE_DEFINITIONS:
        return [];
    case RECEIVE_SYNONYMS:
        return [];
    case CLEAR_DICTIONARY_ERRORS:
        return [];
    default:
        return prevState;
    }
};

export default dictionaryErrorReducer;