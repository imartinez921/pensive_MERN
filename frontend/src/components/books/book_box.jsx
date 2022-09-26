import React from "react";
import '../../assets/css/03-books-main-section-container.css';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';
import { Link } from "react-router-dom";


class BookBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const id = this.props.id;
    this.props.history.push(`/edit_book/${id}`);
  }

  handleDelete(e){
    e.preventDefault();
    if (window.confirm('Are you sure you want delete this book? This cannot be undone')) {
      this.props.removeBook(this.props.id)
    }
    
  }

  render() {
    return (
      <div className="individual-book">
        <Link to={`/book/${this.props.id}`} className="book-title-link">{this.props.text}</Link>
        <div className="book-buttons-container">
          <button id="delete-button" onClick={this.handleDelete}><RiDeleteBin5Line /></button>
          <button id="edit-button" onClick={this.handleClick}><FaEdit/></button>
        </div>  

      </div>
    );
  }
}
export default BookBox;