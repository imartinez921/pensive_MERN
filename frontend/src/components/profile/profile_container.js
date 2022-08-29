import { connect } from "react-redux";
import { fetchUserBooks } from "../../actions/book_actions";
import Profile from "./profile";

const mapStateToProps = (state) => {
  return {
    books: Object.values(state.books.user),
    currentUser: state.session.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserBooks: (id) => dispatch(fetchUserBooks(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);