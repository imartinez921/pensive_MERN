import { fetchDefinitions } from "../util/dictionary_api_util";

export const RECEIVE_DEFINITIONS = "RECEIVE_DEFINITIONS";
export const RECEIVE_DICTIONARY_ERRORS = "RECEIVE_DICTIONARY_ERRORS";

const receiveDefinitions = (definitions) => ({
    type: RECEIVE_DEFINITIONS,
    definitions, // this is an array
});

const receiveDictionaryErrors = (errors) => ({
    type: RECEIVE_DICTIONARY_ERRORS,
    errors: errors,
  })

export const lookupWord = query => dispatch => {
  return (
  fetchDefinitions(query)
  .then( data => dispatch( receiveDefinitions(data) ),
  err => (dispatch( receiveDictionaryErrors(err.responseJSON) )))
  )};