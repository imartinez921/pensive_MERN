import { connect } from "react-redux";
import { fetchDefinitions } from "../../util/dictionary_api_util";
import Dictionary from './dictionary';

const mapStateToProps = (state) => {
    return {
        // tweets: Object.values(state.tweets.all),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDefinitions: (query) => dispatch(fetchDefinitions(query)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dictionary);
