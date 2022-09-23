import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import CharacterForm from '../characters/character_form';
import '../../assets/css/05-modal.css';
import DeletionContainer from '../deletion/deletion_container'

const Modal = (props) => {
  console.log('MODAL.JSX PROPS', props)
  if (!props.modal) return null;
  const { modal } = props;
  
  let component;
  switch(modal.type) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'createCharacter':
     component = <CharacterForm modalType="Create"/>;
      break;
    case 'updateCharacter':
<<<<<<< HEAD
      component = <CreateCharacterForm modalType="Update" character={modal.props.character}/>;
=======
      component = <CharacterForm modalType="Update" character={modal.props.character} />;
>>>>>>> prepopulate-character-edit
      break;
    case 'deletion':
     component = <DeletionContainer />;
      break;
    default:
      return null;
  }

  const closeModal = () => {
    console.log('I CLOSED')
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

