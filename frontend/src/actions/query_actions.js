export const CLEAR_QUERIES = 'CLEAR_QUERIES'

const clearQueries = () => {
    console.log('CLEARING QUERIES')
    return (
        { type: CLEAR_QUERIES,
        // message: 'Your history has been cleared.' 
    }
)}

export const resetQueries = () => dispatch => (
    dispatch(clearQueries())
);