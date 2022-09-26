import {
    RECEIVE_USER_BOOKS,
    RECEIVE_NEW_BOOK,
    DELETE_BOOK,
    
  } from "../actions/book_actions";
import { RECEIVE_USER_LOGOUT } from "../actions/session_actions";
  
  const BooksReducer = (
    state = {},
    action
  ) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
      case RECEIVE_USER_BOOKS:
        Object.values(action.books).forEach(book => {
          newState[book._id] = book;
      })
        return newState;
      case RECEIVE_NEW_BOOK:
        newState[action.book._id] = action.book;
        return newState;
      case DELETE_BOOK:
        delete newState[action.bookId];
        return newState;
      case RECEIVE_USER_LOGOUT:
        return {};
      default:
        return state;
    }
  };
  
  export default BooksReducer;