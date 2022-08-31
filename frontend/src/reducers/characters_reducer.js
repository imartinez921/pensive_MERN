import {
    RECEIVE_BOOK_CHARACTERS,
    RECEIVE_NEW_CHARACTER,
    // DELETE_CHARACTER
  } from "../actions/character_actions";
  
  const CharactersReducer = (
    state = { all: {}, book: {}, new: undefined },
    action
  ) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
      case RECEIVE_BOOK_CHARACTERS:
        newState.book= action.characters.data;
        return newState;
      case RECEIVE_NEW_CHARACTER:
        debugger
        newState.new = action.character.data;
        return newState;
      // case DELETE_CHARACTER:
      //   delete newState.book[action.characterId];
      //   return newState;
      default:
        return state;
    }
  };
  
  export default CharactersReducer;