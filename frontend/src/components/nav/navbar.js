import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <>
          {/* <Link to={"/books"}>All Books</Link>
          <Link to={"/profile"}>Profile</Link> */}
          
          {/* <button onClick={this.logoutUser}>Logout</button> */}
        </>
      );
    } else {
      return (
        <div className="logged-out-navbar">
          <Link to={"/signup"}>Signup</Link>
          <Link to={"/login"}>Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <>
        {/* <h1>Our books</h1> */}
        {this.getLinks()}
      </>
    );
  }
}

export default NavBar;