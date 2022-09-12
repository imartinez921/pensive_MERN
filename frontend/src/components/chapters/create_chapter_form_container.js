import { connect } from "react-redux";
import CreateChapterForm from "./create_chapter_form";
import { composeChapter,
} from "../../actions/chapter_actions";

const mapStateToProps = (state, ownProps) => { 
    return ({
        book: state.books[ownProps.match.params.id],
        // bookId: ownProps.match.params.id,
        bookId: '6314b41bbe9257180a74e73f',
    })
}

const mapDispatchToProps = (dispatch) => ({
    composeChapter: (data) => dispatch(composeChapter(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateChapterForm);