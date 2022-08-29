import React from "react";
import { withRouter } from "react-router-dom";
import BookBox from "./book_box";

class Book extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
    };
  }

  componentWillMount() {
    this.props.fetchBooks();
  }

  componentWillReceiveProps(newState) {
    this.setState({ books: newState.books });
  }

  render() {
    if (this.state.books.length === 0) {
      return <div>There are no Books</div>;
    } else {
      return (
        <div>
          <h2>All Books</h2>
          {this.state.books.map((book) => (
            <BookBox key={book._id} text={book.title} />
          ))}
        </div>
      );
    }
  }
}

export default withRouter(Book);