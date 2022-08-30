import { dictionaryKey } from "../config/keys.js";
// const {WordnikAPI} = require("wordnik-api");
// const dictApi = new WordnikAPI(dictionaryKey);
const baseURL = 'https://api.wordnik.com/v4';

// example of a named export 
export const fetchDefinitions = (query)  => {
    console.log('QUERY', query)

    return fetch(`${baseURL}/word.json/${query}/definitions?limit=10&includeRelated=false&useCanonical=false&includeTags=false&api_key=${dictionaryKey}`)
        // .then(response => response.json())
        // .then(console.log('MADE IT TO AN OBJECT', response));
};