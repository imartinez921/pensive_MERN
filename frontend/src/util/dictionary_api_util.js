import { dictionaryKey } from "../config/keys.js";
// const {WordnikAPI} = require("wordnik-api");
// const dictApi = new WordnikAPI(dictionaryKey);
const baseURL = 'https://api.wordnik.com/v4';

// example of a named export 
export const fetchDefinitions = (query)  => {
    console.log('QUERY', query)
    // const params = new URLSearchParams({ tag: query, api_key: dictionaryKey });
    // console.log('PARAMS', params)
    
    console.log((`${baseURL}/word.json/${query}/definitions?limit=10&includeRelated=false&useCanonical=false&includeTags=false&api_key=${dictionaryKey}`))
    return fetch(`${baseURL}/word.json/${query}/definitions?limit=10&includeRelated=false&useCanonical=false&includeTags=false&api_key=${dictionaryKey}`)
        .then((res) => res.json())
        .then((data) => console.log('MADE IT TO RESOLUTION', data));
    // DATA is an ARRAY of definition objects
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
};