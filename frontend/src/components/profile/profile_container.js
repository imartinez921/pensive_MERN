import { connect } from "react-redux";
import { fetchUserBooks, removeBook, editBook,fetchBookById} from "../../actions/book_actions";
import Profile from "./profile";

const mapStateToProps = (state,ownProps) => {
  return {
    books: Object.values(state.books),
    currentUser: state.session.user,
    history: ownProps.history
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserBooks: (id) => dispatch(fetchUserBooks(id)),
    removeBook: (id) => dispatch(removeBook(id)),
    editBook: (data) => dispatch(editBook(data)),
    fetchBookById: (id) => dispatch(fetchBookById(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);