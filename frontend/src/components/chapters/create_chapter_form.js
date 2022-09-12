import React from "react";
// import { BsFillBackspaceFill } from 'react-icons/bs';

class CreateChapterForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      title: "",
      description: "",
    //   errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // this.setState({
    //   errors: nextProps.errors
    // });
  }

  componentDidMount() {
    // this.props.fetchUserBooks(this.props.currentUser.id).then(() => {
    //   this.props.fetchBookById(this.props.match.params.id)
    // });
  }

  componentWillUnmount() {
    // this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    let chapter = {
      title: this.state.title,
      bookId: this.props.bookId,
      description: this.state.description,
    };

    console.log('THIS IS MY CHAPTER', chapter)

    // this.props.composeChapter(chapter).then(() => this.props.history.push(`/profile`));
    this.props.composeChapter(chapter).then(() => console.log('CHAPTER IS POSTED'));
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  };
  
  // renderErrors() {
  //   return (
  //     <ul>
  //       {Object.keys(this.state.errors).map((error, i) => (
  //         <li key={`error-${i}`}>{this.state.errors[error]}</li>
  //       ))}
  //     </ul>
  //   );
  // }
  // handleClick = () => {
  //   this.props.history.push("/profile")
  // };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <div>
              <input type="textarea" value={this.state.title} onChange={this.update("title")} placeholder="Please title your chapter" />
            </div>
            <div>
              <input type="description"
                value={this.state.description}
                onChange={this.update("description")}
                placeholder="Feel free to write an intention, synopsis, or bulletpoints relating to your new chapter." />
            </div>
            <div>
              <input type="submit" value="Create Chapter" />
            </div>
            <div>
              {/* {this.renderErrors()} */}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateChapterForm;