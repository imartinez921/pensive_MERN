import React from "react";
import { withRouter } from "react-router-dom";

class DeletionModal extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   email: "",
    //   password: "",
    //   errors: {},
    // };

    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.renderErrors = this.renderErrors.bind(this);
    // this.handleDemo = this.handleDemo.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.currentUser === true) {
    //   this.props.history.push("/books");
    // }

    // this.setState({ errors: nextProps.errors });
  }

  update(field) {
    // return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    // e.preventDefault();

    // let user = {
    //   email: this.state.email,
    //   password: this.state.password,
    // };

    // this.props.login(user);
  }

  handleDemo(e) {
    // e.preventDefault();
    // let demo = {
    //   email: "demo@pensive.com",
    //   password: "password",
    // };

    // this.props.login(demo);
}


  renderErrors() {
  //   return (
  //     <ul>
  //       {Object.keys(this.state.errors).map((error, i) => (
  //         <li key={`error-${i}`}>{this.state.errors[error]}</li>
  //       ))}
  //     </ul>
  //   );
  }

  render() { 
    return null
  //   return (
  //     <div>
  //       <form onSubmit={this.handleSubmit}>
  //         <div>
  //           <input
  //             type="text"
  //             value={this.state.email}
  //             onChange={this.update("email")}
  //             placeholder="Email"
  //           />
  //           <br />
  //           <input
  //             type="password"
  //             value={this.state.password}
  //             onChange={this.update("password")}
  //             placeholder="Password"
  //           />
  //           <br />
  //           <input type="submit" value="Log In" />
  //           {this.renderErrors()}
  //         </div>
  //       </form>
  //       <button onClick={this.handleDemo}>Demo Login</button>
  //     </div>
  //   );
  }
}

export default withRouter(DeletionModal);