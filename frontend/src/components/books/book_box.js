import React from "react";
import '../../assets/css/03-books-main-section-container.css';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';


class BookBox extends React.Component {
  render() {
    
    return (
      <div className="individual-book">
        <button id="delete-button" onClick={() => this.props.removeBook(this.props.id)}><RiDeleteBin5Line /></button>
        <button id="edit-button" ><FaEdit/></button>
        <h3>{this.props.text}</h3>
      </div>
    );
  }
}

export default BookBox;