import {
    RECEIVE_DICTIONARY_ERROR,
    CLEAR_DICTIONARY_ERRORS,
  } from "../actions/dictionary_actions.js";
    
const dictionaryErrorReducer = (prevState = [], action) => {
    Object.freeze(prevState);
    let newState = Object.assign([], prevState);

    switch (action.type) {
    case RECEIVE_DICTIONARY_ERROR:
        console.log('action.error', action.error)
        newState.concat(action.error);
        console.log(newState)
        return newState;
    case CLEAR_DICTIONARY_ERRORS:
        return [];
    default:
        return prevState;
    }
};

export default dictionaryErrorReducer;