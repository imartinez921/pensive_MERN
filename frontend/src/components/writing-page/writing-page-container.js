import { connect } from "react-redux";
import WritingPage from "./writing-page";
import { fetchChapterById, editChapter } from "../../actions/chapter_actions";
const mapStateToProps = (state, ownProps) => { 
    console.log(ownProps)
    return ({
        chapters: state.chapters,
        chapter: state.chapters[ownProps.match.params.id],
        chapterId: ownProps.match.params.id,
        bookId: ownProps.match.params.bookId,
        currentUserId: state.session.user.id
    })
}


const mapDispatchToProps = (dispatch) => ({
    fetchChapterById: (id) => dispatch(fetchChapterById(id)),
    editChapter: (data) => dispatch(editChapter(data)),

})

export default connect(mapStateToProps, mapDispatchToProps)(WritingPage);