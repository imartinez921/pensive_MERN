import {
    RECEIVE_USER_BOOKS,
    RECEIVE_NEW_BOOK,
    DELETE_BOOK
  } from "../actions/book_actions";
  
  const BooksReducer = (
    state = { },
    action
  ) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
      case RECEIVE_USER_BOOKS:
        const books = action.books.data;
        books.forEach((book) => newState[book._id] = book);
        return newState;
      case RECEIVE_NEW_BOOK:
        newState[action.book._id] = action.book.data;
        return newState;
      case DELETE_BOOK:
        delete newState[action.bookId];
        return newState;
      default:
        return state;
    }
  };
  
  export default BooksReducer;