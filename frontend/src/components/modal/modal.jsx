import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import CharacterForm from '../characters/character_form';
import '../../assets/css/05-modal.css';

const Modal = (props) => {
  if (!props.modal) return null;
  const { modal } = props;
  console.log("modalProps",props)
  let component;
  switch(modal.type) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'createCharacter':
     component = <CharacterForm modalType="Create" bookId={modal.props.bookId}/>;
      break;
    case 'updateCharacter':
      component = <CharacterForm modalType="Update" character={modal.props.character} />;
      break;
    default:
      return null;
  }

  const closeModal = () => {
    props.closeModal();
  }

    return (
      <div className="modal-background">
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    )
};

const msp = (state, ownProps) => {
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

