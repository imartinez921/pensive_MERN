import { getBookChapters, writeChapter, deleteChapter, updateChapter, getChapter } from "../util/chapter_api_util";

export const RECEIVE_BOOK_CHAPTERS = "RECEIVE_BOOK_CHAPTERS";
export const RECEIVE_NEW_CHAPTER = "RECEIVE_NEW_CHAPTER";
export const REMOVE_CHAPTER = "REMOVE_CHAPTER";
export const RECEIVE_CHAPTER_ERRORS = "RECEIVE_CHAPTER_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";


export const receiveBookChapters = (chapters) =>({
        type: RECEIVE_BOOK_CHAPTERS,
        chapters
    })

export const receiveNewChapter = (chapter) =>({
    type: RECEIVE_NEW_CHAPTER,
    chapter,
})

export const receiveChapterErrors = (errors) => ({
    type: RECEIVE_CHAPTER_ERRORS,
    errors,
})

export const removeChapter = (chapterId) =>({
    type: REMOVE_CHAPTER,
    chapterId,
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
});


export const fetchBookChapters = (bookId) => (dispatch) =>
    getBookChapters(bookId)
        .then((chapters) => dispatch(receiveBookChapters(chapters.data)),
            (err) => dispatch(receiveChapterErrors(err.response.data)));


export const fetchChapterById = (id) => (dispatch) =>
    getChapter(id)
        .then((chapter) => dispatch(receiveNewChapter(chapter.data)),
            (err) => dispatch(receiveChapterErrors(err.response.data)));


export const composeChapter = (data) => (dispatch) =>
    writeChapter(data)
        .then((chapter) => dispatch(receiveNewChapter(chapter.data)))
        .catch((err) => {
            dispatch(receiveChapterErrors(err.response.data))
            return new Promise((resolve, reject) => {
                return reject();
            })
        });

export const deleteBookChapter = (id) => (dispatch) =>
    deleteChapter(id)
        .then(() => dispatch(deleteBookChapter(id)),
            (err) => dispatch(receiveChapterErrors(err.response.data)));

export const editChapter = (data) => (dispatch) =>
    updateChapter(data)
        .then((chapter) => dispatch(receiveNewChapter(chapter.data)),
            (err) => dispatch(receiveChapterErrors(err.response.data)));
