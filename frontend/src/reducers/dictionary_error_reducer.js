import {
    RECEIVE_DICTIONARY_ERROR,
    CLEAR_DICTIONARY_ERRORS,
    RECEIVE_DEFINITIONS,
  } from "../actions/dictionary_actions.js";
    
const dictionaryErrorReducer = (prevState = [], action) => {
    Object.freeze(prevState);
    let newState = Object.assign([], prevState);

    switch (action.type) {
    case RECEIVE_DICTIONARY_ERROR:
        newState.push([action.error.message]);
        return newState;
    case RECEIVE_DEFINITIONS:
        return [];
    case CLEAR_DICTIONARY_ERRORS:
        return [];
    default:
        return prevState;
    }
};

export default dictionaryErrorReducer;