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
    console.log(this.props)
    if (this.state.books.length === 0) {
      return <div>You have no Books</div>;
    } else {
      return (
        <div className="books-main-section-container">
          <h2>Your Books</h2>
          <div className="all-books-container">
          {this.state.books.map((book) => (
            <BookBox key={book._id} text={book.title} removeBook={this.props.removeBook} id={book._id} data={book} editBook={this.props.editBook} fetchbook={this.props.fetchBookById} history={this.props.history } />
          ))}
            <Link to={"/new_book"} className="add-book">+</Link>
          </div>
        </div>
      );
    }
  }
}

export default Profile;