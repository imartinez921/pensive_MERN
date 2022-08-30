import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";
import booksReducer from "./books_reducer";
import dictionaryReducer from "./dictionary_reducer";


const RootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  books: booksReducer,
  definitions: dictionaryReducer,
});

export default RootReducer;