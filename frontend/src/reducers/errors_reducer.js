import { combineReducers } from "redux";

import SessionErrorsReducer from "./session_errors_reducer";
import BookErrorsReducer from "./book_errors_reducer";
import CharacterErrorsReducer from "./character_errors_reducer";

export default combineReducers({
  session: SessionErrorsReducer,
  book: BookErrorsReducer,
  character: CharacterErrorsReducer
});