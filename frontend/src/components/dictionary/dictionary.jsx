import {
  RECEIVE_WORD,
} from "../actions/dictionary_actions.js";
  
  const dictionaryReducer = (state = {},action) => {
    Object.freeze(state);

    let newState = Object.assign({}, state);
    switch (action.type) {
      case RECEIVE_WORD:
        newState.word = action.word.data;
        return newState;
      default:
        return state;
    }
  };
  
export default dictionaryReducer;