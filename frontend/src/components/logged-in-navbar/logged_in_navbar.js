import React from "react";
import '../../assets/css/02-logged-in-navbar.css';

class LoggedInNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }


    render() {
        return (
            <div className="logged-in-navbar">
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        )
    }
}

export default LoggedInNavbar;