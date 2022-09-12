import axios from "axios";

export const getBookChapters = (id) => {
    return axios.get(`/api/chapters/all/${id}`);
};

export const getChapter = (id) => {
    return axios.get(`/api/chapters/${id}`);
}

export const writeChapter = (data) => {
    return axios.post("/api/chapters/", data);
};

export const deleteChapter = (id) => {
    return axios.delete(`/api/chapters/${id}`);
};

export const updateChapter = (data) => {
    return axios.patch(`/api/chapters/${data.id}`, data);
}