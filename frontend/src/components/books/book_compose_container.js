import { connect } from "react-redux";
import { composeBook, clearErrors } from "../../actions/book_actions";
import BookCompose from "./book_compose";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.user,
    newBook: state.books.new,
    errors: state.errors.book,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    composeBook: (data) => dispatch(composeBook(data)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookCompose);