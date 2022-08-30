import React from "react";
// import BookBox from "./book_box";

class BookCompose extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      editor: "",
      genre: "",
      description:"",
      newBook: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ newBook: nextProps.newBook.title });
  }

  handleSubmit(e) {
    e.preventDefault();
    let book = {
      title: this.state.title,
    };

    this.props.composeBook(book);
    this.setState({ title: "" });
  }

  update() {
    return (e) =>
      this.setState({
        title: e.currentTarget.value,
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="textarea"
              value={this.state.title}
              onChange={this.update()}
              placeholder="Write your title..."
            />
            <input type="submit" value="Submit" />
          </div>
        </form>
        <br />
      </div>
    );
  }
}

export default BookCompose;