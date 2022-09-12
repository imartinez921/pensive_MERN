import React from "react";
import "../../assets/css/10-new-book.css";
import { BsFillBackspaceFill } from 'react-icons/bs';

// import BookBox from "./book_box";
class BookCompose extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      editor: "",
      genre: "",
      description:"",
      errors: {},
    };


    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      errors: nextProps.errors});
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    let book = {
      title: this.state.title,
      editor: this.state.editor,
      genre: this.state.genre,
      description: this.state.description
    };
    this.props.composeBook(book).then(() => this.props.history.push(`/profile`));

    this.setState({ title: "", editor: "", genre: "", description: "" });
    
  }
  handleClick = () => {
    this.props.history.push("/profile")
  };

  update(property) {
    return (e) =>
      this.setState({
        [property]: e.currentTarget.value,
      });
  };
  
  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`} className="create-book-errors">{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="create-book-main-container">
        <div id="back-to-profile">
          <button onClick={this.handleClick}><BsFillBackspaceFill /></button>
        </div>
        <form onSubmit={this.handleSubmit} className="create-book-form">
          <div className="new-book-inputs">
            <div>
                <input type="textarea" value={this.state.title} onChange={this.update("title")} placeholder="What's the title of your next masterpiece?" />
            </div>
            <div>
              <input type="textarea"
                value={this.state.editor}
                onChange={this.update("editor")}
                placeholder="Who will be the editor for this project?" />
            </div>
            <div>
              <input type="textarea"
                value={this.state.genre}
                onChange={this.update("genre")}
                placeholder="What's the genre this time?" />
            </div>
            <div>
              <input type="textarea"
                value={this.state.description}
                onChange={this.update("description")}
                placeholder="Now let's get into the juicy part" />
            </div>
            <div>
              <input type="submit" value="Submit" className="create-book-button"/>
            </div>
            <div>
              {this.renderErrors()}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default BookCompose;