import { connect } from "react-redux";
import { lookupWord } from "../../actions/dictionary_actions";
import Dictionary from './dictionary';

const mapStateToProps = (state) => {
    return {
        // tweets: Object.values(state.tweets.all),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        lookupWord: (query) => dispatch(lookupWord(query)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dictionary);
