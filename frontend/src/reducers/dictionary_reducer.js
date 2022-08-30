import {
  RECEIVE_DEFINITIONS,
  // KEEP_QUERY,
} from "../actions/dictionary_actions.js";
  
  const dictionaryReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
      case RECEIVE_DEFINITIONS:
        // action.definitions is an ARRAY of definition objects
        action.definitions.forEach( (def, i) =>
          newState[i] = {
            sourceDictionary: def.sourceDictionary,
            attributionText: def.attributionText,
            attributionUrl: def.attributionUrl,
            partOfSpeech: def.partOfSpeech,
            definition: def.text,
        })
        if (action.definitions.length !== 0) {
          newState['word'] = action.definitions[0].word;
          newState['wordURL'] = action.definitions[0].wordnikUrl;
        }
        return newState;
      // case KEEP_QUERY:
      default:
        return state;
        
      }
  };
  
export default dictionaryReducer;