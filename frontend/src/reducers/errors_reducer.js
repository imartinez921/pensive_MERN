import { combineReducers } from "redux";

import SessionErrorsReducer from "./session_errors_reducer";
import BookErrorsReducer from "./book_errors_reducer";
import dictionaryErrorReducer from "./dictionary_error_reducer";


export default combineReducers({
  session: SessionErrorsReducer,
  book: BookErrorsReducer,
  dictionary: dictionaryErrorReducer,
});