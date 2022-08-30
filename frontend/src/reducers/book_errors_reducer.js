import { CLEAR_ERRORS, RECEIVE_BOOK_ERRORS, RECEIVE_NEW_BOOK} from "../actions/book_actions";
  
  const _nullErrors = [];
  
  const BookErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
       case RECEIVE_BOOK_ERRORS:
            return action.errors;
        case RECEIVE_NEW_BOOK:
            return _nullErrors;
        case CLEAR_ERRORS:
            return _nullErrors;
      default:
        return state;
    }
  };
  
  export default BookErrorsReducer;