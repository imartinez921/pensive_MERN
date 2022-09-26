import { fetchDefinitions,
  fetchSynonyms,
  fetchAntonyms,
 } from "../util/dictionary_api_util";

export const RECEIVE_DEFINITIONS = "RECEIVE_DEFINITIONS";
export const RECEIVE_SYNONYMS = "RECEIVE_SYNONYMS";
export const RECEIVE_DICTIONARY_ERROR = "RECEIVE_DICTIONARY_ERROR";
export const CLEAR_DICTIONARY_ERRORS = "CLEAR_DICTIONARY_ERRORS";


const receiveDefinitions = (definitions) => {
  return ({
  type: RECEIVE_DEFINITIONS,
  definitions, // this is an array
});}

const receiveSynonyms = (synonyms) => {
  return ({
  type: RECEIVE_SYNONYMS,
  synonyms, // Synonyms object with {query, relationshipType, words}
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


// Fetch definitions
export const defineWord = query => dispatch => {
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


// Fetch synonyms
export const synWord = query => dispatch => {
  return (
      fetchSynonyms(query)
      .then(response => { // check if response.ok === true
        if (!response.ok) {
          return Promise.reject(response);
        } else { // if true, then convert to .json body
          return response.json();
      }})
      .then(data => { 
        data[0].query = query; // add query key-value to response
        dispatch( receiveSynonyms(data[0]) );
      })
      .catch(error => {
        if (typeof error.json === "function") {
          error.json().then(jsonError => {dispatch( receiveDictionaryError(jsonError) );
      })}})
  )}

  // Synonym response is an array containing an object as follows:
  // [
  //   {
  //   "relationshipType": "synonym",
  //   "words": [
  //   "accidental",
  //   "adventitious",
  // ]