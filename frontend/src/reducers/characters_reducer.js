import {
    RECEIVE_BOOK_CHARACTERS,
    RECEIVE_NEW_CHARACTER,
    DELETE_CHARACTER
  } from "../actions/character_actions";
import { RECEIVE_USER_BOOKS } from "../actions/book_actions";
  
  const CharactersReducer = (
    state = {},
    action
  ) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
      case RECEIVE_BOOK_CHARACTERS:
        debugger
       Object.values(action.characters).forEach(character=> {
          newState[character._id] = character;
      })
        return newState;
      case RECEIVE_NEW_CHARACTER:
        debugger
        newState[action.character._id] = action.character;
        return newState;
      case DELETE_CHARACTER:
        delete newState[action.characterId];
        return newState;
      case RECEIVE_USER_BOOKS:
        return {};
      default:
        return state;
    }
  };
  
  export default CharactersReducer;