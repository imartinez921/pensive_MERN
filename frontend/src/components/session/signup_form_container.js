import { connect } from "react-redux";
import { signup, login } from "../../actions/session_actions";
import SignupForm from "./signup_form";
import React from 'react';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: "Sign up",
    currentUser: state.session.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    processForm: user => dispatch(signup(user)),
    processDemoForm: user => dispatch(login(user)),
    otherForm: (
      <a 
        href="#"
        className="modal__btn-other-form"
        onClick={() => dispatch(openModal('login', {}))}>
        Log in
      </a>
    ),
    closeModal: () => dispatch(closeModal()),
    openModal: () => dispatch(openModal("login",{}))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);