import { fetchDefinitions } from "../util/dictionary_api_util";

export const RECEIVE_DEFINITIONS = "RECEIVE_DEFINITIONS";
export const RECEIVE_DICTIONARY_ERRORS = "RECEIVE_DICTIONARY_ERRORS";


const receiveDefinitions = (definitions) => {
  console.log('RECEIVING DEFINITIONS', definitions)
  return ({
  type: RECEIVE_DEFINITIONS,
  definitions, // this is an array
});}

const receiveDictionaryErrors = (errors) => ({
    type: RECEIVE_DICTIONARY_ERRORS,
    errors: errors,
  })

export const lookupWord = query => dispatch => {
  return (
    fetchDefinitions(query)
    .then(res => res.json())
    .then(res => dispatch( receiveDefinitions(res) ),
    err => (dispatch( receiveDictionaryErrors(err.responseJSON) )))
  )};

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