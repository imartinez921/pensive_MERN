import {
    RECEIVE_USER_CHARACTERS,
    RECEIVE_NEW_CHARACTER,
    DELETE_CHARACTER
  } from "../actions/character_actions";
  
  const CharactersReducer = (
    state = { all: {}, user: {}, new: undefined },
    action
  ) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
      case RECEIVE_USER_CHARACTERS:
        newState.user= action.characters.data;
        return newState;
      case RECEIVE_NEW_CHARACTER:
        newState.new = action.character.data;
        return newState;
      case DELETE_CHARACTER:
        delete newState.user[action.characterId];
        return newState;
      default:
        return state;
    }
  };
  
  export default CharactersReducer;