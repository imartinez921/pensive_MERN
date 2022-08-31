import { connect } from "react-redux";
import { lookupWord,
    resetDictionaryErrors,
} from "../../actions/dictionary_actions";
import {
    resetQueries,
} from "../../actions/query_actions";
import Dictionary from './dictionary';

const mapStateToProps = (state) => {
    return {
        queries: state.queries,
        definitions: state.definitions,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        lookupWord: (query) => dispatch(lookupWord(query)),
        resetDictionaryErrors: (err) => dispatch(resetDictionaryErrors(err)),
        resetQueries: (query) => dispatch(resetQueries(query)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dictionary);
