import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import Modal from "./modal";
// import { clearErrors } from "../../actions/session_actions";

const mapStateToProps = state => ({
    modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    // clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);