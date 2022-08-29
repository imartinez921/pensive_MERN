import { connect } from "react-redux";
import { composeBook } from "../../actions/book_actions";
import BookCompose from "./book_compose";

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    newBook: state.books.new,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    composeBook: (data) => dispatch(composeBook(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookCompose);