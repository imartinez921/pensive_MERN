import { connect } from "react-redux";
import { fetchBooks } from "../../actions/book_actions";
import Books from "./books.js";

const mapStateToProps = (state) => {
  return {
    books: Object.values(state.books.all),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBooks: () => dispatch(fetchBooks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);