import { dictionaryKey } from "../config/keys.js";
// const {WordnikAPI} = require("wordnik-api");
// const dictApi = new WordnikAPI(dictionaryKey);
const baseURL = 'https://api.wordnik.com/v4';

// example of a named export 
export const fetchDefinitions = (query) => {
    console.log('QUERY', query)
    // const params = new URLSearchParams({ tag: query, api_key: dictionaryKey });
    // console.log('PARAMS', params)
    console.log('dictionaryKey', dictionaryKey);
    console.log((`${baseURL}/word.json/${query}/definitions?api_key=${dictionaryKey}`))
    return fetch(`${baseURL}/word.json/${query}/definitions?api_key=${dictionaryKey}`)
        .then(res => res.json());
};