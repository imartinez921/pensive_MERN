import { combineReducers } from "redux";

import SessionErrorsReducer from "./session_errors_reducer";
import BookErrorsReducer from "./book_errors_reducer";
import CharacterErrorsReducer from "./character_errors_reducer";
import dictionaryErrorReducer from "./dictionary_error_reducer";
import ChapterErrorsReducer from "./chapter_errors_reducer";


export default combineReducers({
  session: SessionErrorsReducer,
  book: BookErrorsReducer,
  character: CharacterErrorsReducer,
  dictionary: dictionaryErrorReducer,
  chapter: ChapterErrorsReducer,
});