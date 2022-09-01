import { connect } from "react-redux";
import { editBook, clearErrors, fetchBookById, fetchUserBooks} from "../../actions/book_actions";
import BookEdit from "./edit_book_form";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.user,
    newBook: state.books.new,
    errors: state.errors.book,
    book: state.books[ownProps.match.params.id],

  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    editBook: (data) => dispatch(editBook(data)),
    clearErrors: () => dispatch(clearErrors()),
    fetchBookById: (id) => dispatch(fetchBookById(id)),
    fetchUserBooks: (id) => dispatch(fetchUserBooks(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookEdit);