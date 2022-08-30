import { fetchDefinitions } from "../util/dictionary_api_util";

export const RECEIVE_WORD = "RECEIVE_WORD";
export const RECEIVE_DICTIONARY_ERRORS = "RECEIVE_DICTIONARY_ERRORS";

const receiveWord = (word) => ({
    type: RECEIVE_WORD,
    word,
});

const receiveDictionaryErrors = (errors) => ({
  type: RECEIVE_DICTIONARY_ERRORS,
  errors: errors,
})

export const lookupWord = query => dispatch => {
  // debugger;
  return (
  fetchDefinitions(query)
  .then( res => dispatch( receiveWord(res.data) ),
  err => (dispatch( receiveDictionaryErrors(err.responseJSON) )))
  )};