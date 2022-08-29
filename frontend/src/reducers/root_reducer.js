import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";
import booksReducer from "./books_reducer";


const RootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  books: booksReducer
});

export default RootReducer;