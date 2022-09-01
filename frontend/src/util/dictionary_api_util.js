import { dictionaryKey } from "../config/keys.js";
// const {WordnikAPI} = require("wordnik-api");
// const dictApi = new WordnikAPI(dictionaryKey);
const baseURL = 'https://api.wordnik.com/v4';

export const fetchDefinitions = (query)  => {
    return fetch(`${baseURL}/word.json/${query}/definitions?limit=10&includeRelated=false&useCanonical=false&includeTags=false&api_key=${dictionaryKey}`)
};

export const fetchSynonyms = (query)  => {
    return fetch(`${baseURL}/word.json/${query}/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=100&api_key=${dictionaryKey}`)
};

export const fetchAntonyms = (query)  => {
    return fetch(`${baseURL}/word.json/${query}/relatedWords?useCanonical=false&relationshipTypes=antonym&limitPerRelationshipType=7&api_key=${dictionaryKey}`)
};