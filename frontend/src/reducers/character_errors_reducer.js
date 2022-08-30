import { CLEAR_ERRORS, RECEIVE_CHARACTER_ERRORS, RECEIVE_NEW_CHARACTER} from "../actions/character_actions";
  
  const _nullErrors = [];
  
  const CharacterErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
       case RECEIVE_CHARACTER_ERRORS:
            return action.errors;
        case RECEIVE_NEW_CHARACTER:
            return _nullErrors;
        case CLEAR_ERRORS:
            return _nullErrors;
      default:
        return state;
    }
  };
  
  export default CharacterErrorsReducer;