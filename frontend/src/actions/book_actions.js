import { getBooks, getUserBooks, writeBook } from "../util/book_api_util";

export const RECEIVE_BOOKS = "RECEIVE_BOOKS";
export const RECEIVE_USER_BOOKS = "RECEIVE_USER_BOOKS";
export const RECEIVE_NEW_BOOK = "RECEIVE_NEW_BOOK";
export const RECEIVE_BOOK_ERRORS = "RECEIVE_BOOK_ERRORS";

export const receiveBooks = (books) => ({
  type: RECEIVE_BOOKS,
  books,
});

export const receiveUserBooks = (books) => ({
  type: RECEIVE_USER_BOOKS,
  books,
});

export const receiveNewBook = (book) => ({
  type: RECEIVE_NEW_BOOK,
  book,
});

export const receiveBookErrors = (errors) => ({
  type: RECEIVE_BOOK_ERRORS,
  errors,
}); 


export const fetchBooks = () => (dispatch) =>
  getBooks()
    .then((books) => dispatch(receiveBooks(books)),
      (err) => dispatch(receiveBookErrors(err.response.data)));

export const fetchUserBooks = (id) => (dispatch) =>
  getUserBooks(id)
    .then((books) => dispatch(receiveUserBooks(books)),
      (err) => dispatch(receiveBookErrors(err.response.data)));

export const composeBook = (data) => (dispatch) =>
  writeBook(data)
    .then((book) => dispatch(receiveNewBook(book)),
      (err) => dispatch(receiveBookErrors(err.response.data)));