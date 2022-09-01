import React from "react";
import { Link } from "react-router-dom";
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
                {/* <Link to={"/new_book"}>Create a Book</Link> */}
            </div>
        )
    }
}

export default LoggedInNavbar;