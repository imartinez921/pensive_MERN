import React from "react";
import '../../assets/css/03-books-main-section-container.css'
import { withRouter } from 'react-router-dom';

class BookBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const bookId = this.props.id;
    this.props.history.push(`/profile/${bookId}`);
  }

  render() {
    return (
      <div className="individual-book" onClick={this.handleClick}>
        <h3>{this.props.text}</h3>
        
      </div>
    );
  }
}

export default withRouter(BookBox);