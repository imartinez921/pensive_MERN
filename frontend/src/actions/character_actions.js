import { getBookCharacters, writeCharacter, deleteCharacter, updateCharacter, getCharacter} from "../util/character_api_util";

export const RECEIVE_BOOK_CHARACTERS = "RECEIVE_BOOK_CHARACTERS";
export const RECEIVE_NEW_CHARACTER = "RECEIVE_NEW_CHARACTER";
export const DELETE_CHARACTER = "DELETE_CHARACTER";

export const RECEIVE_CHARACTER_ERRORS = "RECEIVE_CHARACTER_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveBookCharacters = (characters) => ({
  type: RECEIVE_BOOK_CHARACTERS,
  characters,
});

export const receiveNewCharacter = (character) => ({
  type: RECEIVE_NEW_CHARACTER,
  character,
});

export const receiveCharacterErrors = (errors) => ({
  type: RECEIVE_CHARACTER_ERRORS,
  errors,
}); 

export const deleteBookCharacter = (characterId) => ({
  type: DELETE_CHARACTER,
  characterId,
})

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const fetchBookCharacters = (bookId) => (dispatch) => {
   return getBookCharacters(bookId)
    .then((characters) => dispatch(receiveBookCharacters(characters.data)),
      (err) => dispatch(receiveCharacterErrors(err.response.data)));
}

export const fetchCharacterById = (id) => (dispatch) =>
   getCharacter(id)
  .then((character) => dispatch(receiveNewCharacter(character.data)),
    (err) => dispatch(receiveCharacterErrors(err.response.data)));

export const composeCharacter = (data) => (dispatch) =>
  writeCharacter(data)
  .then((character) => dispatch(receiveNewCharacter(character.data)))
  .catch ((err) => { 
    dispatch(receiveCharacterErrors(err.response.data))
    return new Promise((resolve,reject) => {
        return reject();
    })
  }); 

export const removeCharacter = (id) => (dispatch) => 
  deleteCharacter(id)
    .then(() => dispatch(deleteBookCharacter(id)),
      (err) => dispatch(receiveCharacterErrors(err.response.data)));

export const editCharacter = (data) => (dispatch) =>
  updateCharacter(data)
    .then((character) => dispatch(receiveNewCharacter(character.data)),
      (err) => dispatch(receiveCharacterErrors(err.response.data)));