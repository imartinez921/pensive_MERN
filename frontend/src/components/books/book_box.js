import React from "react";
import '../../assets/css/03-books-main-section-container.css'

class BookBox extends React.Component {
  render() {
    
    return (
      <div className="individual-book">
        <h3>{this.props.text}</h3>
      </div>
    );
  }
}

export default BookBox;