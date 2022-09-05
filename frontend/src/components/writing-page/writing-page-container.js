import { connect } from "react-redux";
import WritingPage from "./writing-page";
import { fetchBookById, fetchUserBooks, editBook} from "../../actions/book_actions";


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
    fetchUserBooks: (id) => dispatch(fetchUserBooks(id)),
    editBook: (book) => dispatch(editBook(book))
})

export default connect(mapStateToProps, mapDispatchToProps)(WritingPage);