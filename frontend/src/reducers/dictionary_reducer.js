import {
  RECEIVE_DEFINITIONS,
} from "../actions/dictionary_actions.js";
import {
  CLEAR_QUERIES,
} from '../actions/query_actions'
import {
  RECEIVE_DICTIONARY_ERROR,
} from "../actions/dictionary_actions.js";

  
  const dictionaryReducer = (state = [], action) => {
    Object.freeze(state);
    let newState = Object.assign([], state);

    switch (action.type) {
      case RECEIVE_DEFINITIONS:
        newState = []; // start with cleared newState
        // action.definitions is an ARRAY of definition objects
        for (let i = 0; i < action.definitions.length; i++) {
          const def = action.definitions[i];
          if (def.text !== undefined) {
            newState.push({
              sourceName: def.sourceDictionary,
              sourceUrl: def.attributionUrl,
              partOfSpeech: def.partOfSpeech,
              definition: def.text,
              sourceText: def.attributionText,
          })}
          else {
            continue;
          }
        }
        if (action.definitions.length !== 0) {
          newState['word'] = action.definitions[0].word;
          newState['wordURL'] = action.definitions[0].wordnikUrl;
        }
        return newState;
      case RECEIVE_DICTIONARY_ERROR:
        return [];
      case CLEAR_QUERIES:
        return [];
      default:
        return state;
        
      }
  };
  
export default dictionaryReducer;