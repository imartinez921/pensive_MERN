import { connect } from "react-redux";
import { defineWord,
    synWord,
    resetDictionaryErrors,
} from "../../actions/dictionary_actions";
import {
    resetQueries,
} from "../../actions/query_actions";
import Dictionary from './dictionary';

const mapStateToProps = (state) => {
    return {
        lastQuery: state.queries[state.queries.length-1],
        queries: state.queries,
        definitions: state.definitions,
        synonyms: state.synonyms,
        // antonyms: state.antonyms,
        errors: state.errors.dictionary,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        defineWord: (query) => dispatch(defineWord(query)),
        synWord: (query) => dispatch(synWord(query)),
        antWord: (query) => dispatch(defineWord(query)),
        resetDictionaryErrors: (err) => dispatch(resetDictionaryErrors(err)),
        resetQueries: (query) => dispatch(resetQueries(query)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dictionary);
