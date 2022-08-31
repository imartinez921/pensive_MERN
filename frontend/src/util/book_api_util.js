import axios from "axios";


export const getUserBooks = (id) => {
  debugger
  return axios.get(`/api/books/user/${id}`);
};

export const getBook = (id) => {
  return axios.get(`/api/books/${id}`);
}

export const writeBook = (data) => {
  return axios.post("/api/books/", data);
};

export const deleteBook = (id) => {
  return axios.delete(`/api/books/${id}`);
};

export const updateBook = (data) => {
  debugger;
  return axios.patch(`/api/books/${data.id}`, data);
}