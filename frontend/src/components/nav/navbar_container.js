import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import NavBar from "./navbar";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => ({
  loggedIn: state.session.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: formType => dispatch(openModal(formType))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);