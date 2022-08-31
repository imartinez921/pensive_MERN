import React from "react";
import { withRouter } from "react-router-dom";
// import BookBox from "./book_box";
// import BooksContainer from "../books/books_container";
import ProfileContainer from "../profile/profile_container";
import LoggedInNavbar from "../logged-in-navbar/logged_in_navbar_container";
import '../../assets/css/01-main-dashboard.css'


class MainDashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
       console.log(this.props)
        return(
            <>
            <div className="main-dashboard" >
                <LoggedInNavbar />
                    <ProfileContainer history={ this.props.history} />
                <div className="temporary"></div>
            </div>
            </>
        )

    }
}

export default withRouter(MainDashboard);