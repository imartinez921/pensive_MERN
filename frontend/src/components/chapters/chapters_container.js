import { connect } from "react-redux";
import Chapters from "./chapters";
import { fetchBookChapters, composeChapter, deleteBookChapter, editChapter } from "../../actions/chapter_actions";

const mapStateToProps = (state, ownProps) =>{
    return{
        bookId: ownProps.match.params.id,
        chapters: state.chapters,
    }

}

const mapDispatchToProps = (dispatch) => ({
    fetchBookChapters: (id) => dispatch(fetchBookChapters(id)),
    composeChapter: (chapter) => dispatch(composeChapter(chapter)),
    editChapter: (chapter) =>  dispatch(editChapter(chapter)),
    deleteBookChapter: (id) => dispatch(deleteBookChapter(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Chapters);

