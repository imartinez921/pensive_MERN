import { RECEIVE_CHAPTER_ERRORS, CLEAR_ERRORS, RECEIVE_NEW_CHAPTER } from "../actions/chapter_actions";
const _nullErrors = [];

const ChapterErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CHAPTER_ERRORS:
            return action.errors;
        case RECEIVE_NEW_CHAPTER:
            return _nullErrors;
        case CLEAR_ERRORS:
            return _nullErrors;
        default:
            return state;
    }
};

export default ChapterErrorsReducer;