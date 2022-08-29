import React from "react";
import BookBox from "../books/book_box";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
    };
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
      return <div>You no Books</div>;
    } else {
      return (
        <div>
          <h2>All of This User's Books</h2>
          {this.state.books.map((book) => (
            <BookBox key={book._id} text={book.title} />
          ))}
        </div>
      );
    }
  }
}

export default Profile;