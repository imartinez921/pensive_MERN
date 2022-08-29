import {
    RECEIVE_BOOKS,
    RECEIVE_USER_BOOKS,
    RECEIVE_NEW_BOOK,
  } from "../actions/book_actions";
  
  const BooksReducer = (
    state = { all: {}, user: {}, new: undefined },
    action
  ) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
      case RECEIVE_BOOKS:
        newState.all = action.books.data;
        return newState;
      case RECEIVE_USER_BOOKS:
        newState.user = action.books.data;
        return newState;
      case RECEIVE_NEW_BOOK:
        newState.new = action.book.data;
        return newState;
      default:
        return state;
    }
  };
  
  export default BooksReducer;