import { RECEIVE_NEW_CHAPTER, RECEIVE_BOOK_CHAPTERS, REMOVE_CHAPTER } from "../actions/chapter_actions";
import { RECEIVE_USER_BOOKS } from "../actions/book_actions";
const ChaptersReducer = (
    state = {},
    action
) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_BOOK_CHAPTERS:
            Object.values(action.chapters).forEach(chapter => {
                newState[chapter._id] = chapter;
            })
            return newState;
        case RECEIVE_NEW_CHAPTER:
            newState[action.chapter._id] = action.chapter;
            return newState;
        case REMOVE_CHAPTER:
            delete newState[action.chapterId];
            // newState = newState.filter(chap => chap.chapterId !== action.chapterId)
            return newState;
        case RECEIVE_USER_BOOKS:
            return {};
        default:
            return state;
    }
};

export default ChaptersReducer;