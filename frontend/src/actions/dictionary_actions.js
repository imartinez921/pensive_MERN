import { fetchDefinitions } from "../util/dictionary_api_util";

export const RECEIVE_DEFINITIONS = "RECEIVE_DEFINITIONS";
export const RECEIVE_DICTIONARY_ERROR = "RECEIVE_DICTIONARY_ERROR";
export const CLEAR_DICTIONARY_ERRORS = "CLEAR_DICTIONARY_ERRORS";


const receiveDefinitions = (definitions) => {
  console.log('RECEIVING DEFINITIONS', definitions)
  return ({
  type: RECEIVE_DEFINITIONS,
  definitions, // this is an array
});}

const clearDictionaryErrors = () => ({
  type: CLEAR_DICTIONARY_ERRORS,
})

const receiveDictionaryError = (error) => ({
  type: RECEIVE_DICTIONARY_ERROR,
  error: error,
})

export const resetDictionaryErrors = () => dispatch => (
  dispatch(clearDictionaryErrors())
  );

// export const resetQueries = () => dispatch => (
//   dispatch(clearDictionaryErrors())
//   );

export const lookupWord = query => dispatch => {
  return (
      fetchDefinitions(query)
      .then(response => { // check if response.ok === true
        if (!response.ok) {
          return Promise.reject(response);
        } else { // if true, then convert to .json body
          return response.json();
      }})
      .then(data => {
        dispatch( receiveDefinitions(data) );
      })
      .catch(error => {
        if (typeof error.json === "function") {
          error.json().then(jsonError => {dispatch( receiveDictionaryError(jsonError) );
      })}})
  )}

// RES is an ARRAY of definition objects
  // eg. query = 'bluebird'
  // attributionText: "from WordNet 3.0 Copyright 2006 by Princeton University. All rights reserved."
  // attributionUrl: "https://wordnet.princeton.edu/"
  // citations: []
  // exampleUses: []
  // labels: []
  // notes: []
  // partOfSpeech: "noun"
  // relatedWords: []
  // sourceDictionary: "wordnet"
  // text: "blue North American songbird"
  // textProns: []
  // word: "bluebird"
  // wordnikUrl: "https://www.wordnik.com/words/bluebird"