import React from "react";
import BookBox from "./book_box";

class BookCompose extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      editor: "",
      genre: "",
      description:"",
      newBook: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      // title: nextProps.newBook.title,
      // editor: nextProps.newBook.editor,
      // genre: nextProps.newBook.genre,
      // description: nextProps.newBook.description,
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

    this.props.composeBook(book);
    this.setState({ title: "", editor: "", genre: "", description: "" });
    if (!this.state.errors)
    { this.props.history.push(`/profile`) };
  }

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
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="textarea"
              value={this.state.title}
              onChange={this.update("title")}
              placeholder="Input the title"
            />
            <br />
            <input type="textarea"
              value={this.state.editor}
              onChange={this.update("editor")}
              placeholder="Input your editor" />
            <br />
            <input type="textarea"
              value={this.state.genre}
              onChange={this.update("genre")}
              placeholder="Input your genre" />
            <br />
            <input type="textarea"
              value={this.state.description}
              onChange={this.update("description")}
              placeholder="Book's description" />
            <input type="submit" value="Submit" />
            {this.renderErrors()}
          </div>
        </form>
        <br />
      </div>
    );
  }
}

export default BookCompose;