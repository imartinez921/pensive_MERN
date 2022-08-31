import { connect } from "react-redux";
import { editBook, clearErrors, fetchBookById} from "../../actions/book_actions";
import BookEdit from "./edit_book_form";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.user,
    newBook: state.books.new,
    errors: state.errors.book,
    book: state.books[ownProps.match.params.bookId]
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    editBook: (data) => dispatch(editBook(data)),
    clearErrors: () => dispatch(clearErrors()),
    fetchBookById: (id) => dispatch(fetchBookById(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookEdit);