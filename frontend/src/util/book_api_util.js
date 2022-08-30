import axios from "axios";


export const getUserBooks = (id) => {
  return axios.get(`/api/books/user/${id}`);
};

export const writeBook = (data) => {
  return axios.post("/api/books/", data);
};

export const deleteBook = (id) => {
  return axios.delete(`/api/books/${id}`);
};

export const updateBook = (data) => {
  return axios.put(`/api/books/${data.id}`, data);
}