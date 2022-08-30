import {
  RECEIVE_DEFINITIONS,
} from "../actions/dictionary_actions.js";
  
  const dictionaryReducer = (state = {},action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
      case RECEIVE_DEFINITIONS:
        action.map( def => {
          def.attributionText: "from WordNet 3.0 Copyright 2006 by Princeton University. All rights reserved."
        })
        newState.word = action.word.data;
        return newState;
      default:
        return state;
    }
  };
  
export default dictionaryReducer;