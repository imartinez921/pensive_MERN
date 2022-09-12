import { combineReducers } from "redux";
import SessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";
import booksReducer from "./books_reducer";
import definitionsReducer from "./definitions_reducer";
import synonymsReducer from "./synonyms_reducer";
import queryReducer from "./query_reducer";
import charactersReducer from "./characters_reducer";
import uiReducer from "./ui_reducer";
import chaptersReducer from "./chapters_reducer";


const RootReducer = combineReducers({
  session: SessionReducer,
  errors: errorsReducer,
  books: booksReducer,
  characters: charactersReducer,
  ui: uiReducer,
  definitions: definitionsReducer,
  synonyms: synonymsReducer,
  queries: queryReducer,
  chapters: chaptersReducer,
});

export default RootReducer;