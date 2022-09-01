import { connect } from "react-redux";
import WritingPage from "./writing-page";
import { fetchBookById, fetchUserBooks} from "../../actions/book_actions";


const mapStateToProps = (state, ownProps) => { 
    return ({
        books: state.books,
        book: state.books[ownProps.match.params.id],
        bookId: ownProps.match.params.id,
        currentUserId: state.session.user.id
    })
}


const mapDispatchToProps = (dispatch) => ({
    fetchBookById: (id) => dispatch(fetchBookById(id)),
    fetchUserBooks: (id) => dispatch(fetchUserBooks(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(WritingPage);