import React from "react";
import '../../assets/css/03-books-main-section-container.css';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';
import { Link } from "react-router-dom";


class BookBox extends React.Component {
  constructor(props) {
    super(props);
    console.log("these are the props",this.props.id)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const id = this.props.id;
    this.props.history.push(`/edit_book/${id}`);
  }

  render() {
    return (
      <div className="individual-book">
        <Link to={`/writing_page/${this.props.id}`} className="book-title-link">{this.props.text}</Link>
        <div className="book-buttons-container">
          <button id="delete-button" onClick={() => this.props.removeBook(this.props.id)}><RiDeleteBin5Line /></button>
          <button id="edit-button" onClick={this.handleClick}><FaEdit/></button>
        </div>  

      </div>
    );
  }
}
export default BookBox;