import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import React from 'react';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors.session,
    formType:"Log in"
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    processForm: (user) => dispatch(login(user)),
    processDemoForm: user => dispatch(login(user)),
    otherForm: (
      <a
        href="#"
        className="modal__btn-other-form"
        onClick={() => dispatch(openModal('signup', {}))}>
        Sign Up
      </a>
    ),
    closeModal: () => dispatch(closeModal())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);