import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import LoggedInNavbar from "./logged_in_navbar";

const mapStateToProps = (state) => ({
    loggedIn: state.session.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(LoggedInNavbar);


