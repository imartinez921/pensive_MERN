import React from "react";
import { withRouter } from "react-router-dom";
import { removeCharacter } from "../../actions/character_actions";

class DeletionModal extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   email: "",
    //   password: "",
    //   errors: {},
    // };

    this.handleDelete = this.handleDelete.bind(this);
  }

  // Used to persist a slice of state upon refresh, but idk whether we need this
  // debugger
  // componentWillReceiveProps(nextProps) {
    // if (nextProps.currentUser === true) {
    //   this.props.history.push("/books");
    // }

    // this.setState({ errors: nextProps.errors });
  // }

  // update(field) {
    // debugger
    // return (e) => this.setState({ [field]: e.currentTarget.value });
  // }

  handleDelete(e) {
    const { deleteType,
      removeCharacter,
      removeBook,
      itemId,
      closeModal,
    } = this.props;
    
    e.preventDefault();
    switch (deleteType) {
      case 'character':
        removeCharacter(itemId);
        break;
      case 'book':
        removeBook(itemId);
        break;
      // case 'chapter':
      //   removeChapter(itemId);
      //break;
      default:
        return null;
    }

  }


  // renderErrors() {
  // debugger
  //   return (
  //     <ul>
  //       {Object.keys(this.state.errors).map((error, i) => (
  //         <li key={`error-${i}`}>{this.state.errors[error]}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() { 
    return (
      <div className="delete-modal">
        {/* <h1>Are you sure you want to delete this {props.deleteType}?</h1> */}
      
            <br />
            <input type="submit" value="Log In" />
            {this.renderErrors()}
        <button onClick={this.handleDelete}>Yes, I'm sure.</button>
        <button onClick={this.props.closeModal}>No, cancel.</button>
      </div>
    );
  }
}

export default withRouter(DeletionModal);