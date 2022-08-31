import { connect } from "react-redux";
import { fetchUserBooks, removeBook, editBook} from "../../actions/book_actions";
import Profile from "./profile";

const mapStateToProps = (state) => {
  return {
    books: Object.values(state.books),
    currentUser: state.session.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserBooks: (id) => dispatch(fetchUserBooks(id)),
    removeBook: (id) => dispatch(removeBook(id)),
    editBook: (data) => dispatch(editBook(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);