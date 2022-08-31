import axios from "axios";


export const getBookCharacters = (bookId) => {
  return axios.get(`/api/characters/book/${bookId}`);
};

export const getCharacter = (charId) => {
  return axios.get(`/api/characters/${charId}`);
}

export const writeCharacter = (data) => {
  return axios.post("/api/characters/", data);
};

export const deleteCharacter = (id) => {
  return axios.delete(`/api/characters/${id}`);
};

export const updateCharacter = (data) => {
  return axios.put(`/api/characters/${data.id}`, data);
}