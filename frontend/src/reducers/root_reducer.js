import { combineReducers } from "redux";
import SessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";
import booksReducer from "./books_reducer";
import dictionaryReducer from "./dictionary_reducer";
import queryReducer from "./query_reducer";


const RootReducer = combineReducers({
  session: SessionReducer,
  errors: errorsReducer,
  books: booksReducer,
  definitions: dictionaryReducer,
  queries: queryReducer,
});

export default RootReducer;