import { connect } from "react-redux";
import WritingPage from "./writing-page";

const mapStateToProps = (state, ownProps) => ({
    book: state.books
    //const selected_id = ownProps.match.params.id
    // selected: state.books.selected_id
    
})


const mapDispatchToProps = (dispatch) => ({
    something: null
})

export default connect(mapStateToProps, mapDispatchToProps)(WritingPage);