import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import CreateCharacterForm from '../characters/create_character_form';
import '../../assets/css/05-modal.css';
import DeletionContainer from '../deletion/deletion_container'

const Modal = (props) => {
  if (!props.modal) return null;

  let component;
  switch(props.modal.type) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'createCharacter':
     component = <CreateCharacterForm />;
      break;
    case 'deletion':
     component = <DeletionContainer />;
      break;
    default:
      return null;
  }

  const closeModal = () => {
    props.closeModal();
  }

    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    )
};

const msp = state => {
  return ({
    modal: state.ui.modal
  });
}

const mdp = dispatch => {
  return ({
    closeModal: () => dispatch(closeModal())
  })
}

export default connect(msp, mdp)(Modal);

