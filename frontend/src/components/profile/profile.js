import React from "react";
import BookBox from "../books/book_box";
import { Link } from "react-router-dom";

import '../../assets/css/03-books-main-section-container.css';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    this.props.fetchUserBooks(this.props.currentUser.id);
  }
  
  componentWillMount() {
    // console.log(this.props.currentUser.id)
    this.props.fetchUserBooks(this.props.currentUser.id);
  }

  componentWillReceiveProps(newState) {
    this.setState({ books: newState.books });
  }

  render() {
    if (this.state.books.length === 0) {
      return (<div className="books-main-section-container">
        <div>You have no Books</div>
        <div className="all-books-container">
        <Link to={"/new_book"} className="add-book">+</Link>
        </div>
      </div>);
    } else {
      const {removeBook,
        editBook,
        fetchBookById,
        history,
      } = this.props;
      return (
        <div className="books-main-section-container">
          <h2>Your Books</h2>
          <div className="all-books-container">
          {this.state.books.map((book) => (
            <BookBox key={book._id}
              text={book.title}
              removeBook={removeBook}
              id={book._id}
              data={book}
              editBook={editBook}
              fetchbook={fetchBookById}
              history={history } />
          ))}
            <Link to={"/new_book"} className="add-book">+</Link>
          </div>
        </div>
      );
    }
  }
}

export default Profile;