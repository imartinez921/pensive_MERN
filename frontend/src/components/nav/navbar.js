import React from "react";
import "../../assets/css/05-landing-page.css"

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  handleOpenModal(type) {
    this.props.openModal(type);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <>
        </>
      );
    } else {
      return (
        <div className="logged-out-navbar">
          <div className="signup-btn" onClick={() => this.handleOpenModal('signup')}>Sign Up</div>
          <div className="login-btn" onClick={() => this.handleOpenModal('login')}>Log In</div>
        </div>
      );
    }
  }

  render() {
    return (
      <>
        <div>
            {this.getLinks()}
        </div>
      </>
    );
  }
}

export default NavBar;