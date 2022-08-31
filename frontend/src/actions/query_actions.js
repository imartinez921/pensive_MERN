export const CLEAR_QUERIES = 'CLEAR_QUERIES'

const clearQueries = () => {
    return (
        { type: CLEAR_QUERIES, }
)}

export const resetQueries = (query) => dispatch => (
    dispatch(clearQueries(query))
);