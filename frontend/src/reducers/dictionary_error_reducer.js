import {
    RECEIVE_DICTIONARY_ERROR,
    CLEAR_DICTIONARY_ERRORS,
    RECEIVE_DEFINITIONS,
    RECEIVE_SYNONYMS,
  } from "../actions/dictionary_actions.js";
import {
    RECEIVE_USER_BOOKS
  } from "../actions/book_actions.js";
    
const dictionaryErrorReducer = (prevState = [], action) => {
    Object.freeze(prevState);
    let newState = Object.assign([], prevState);

    switch (action.type) {
    case RECEIVE_DICTIONARY_ERROR:
        newState = [];
        newState.push('Not found. Please check your input and/or spelling.');
        return newState;
    case RECEIVE_DEFINITIONS:
        return [];
    case RECEIVE_SYNONYMS:
        return [];
    case RECEIVE_USER_BOOKS:
        return [];
    case CLEAR_DICTIONARY_ERRORS:
        return [];
    default:
        return prevState;
    }
};

export default dictionaryErrorReducer;