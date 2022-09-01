import React from "react";
import CreateCharacterForm from '../characters/create_character_form';


const Modal = (props) => {
    if (!props.modal) return null;

    let component;
    switch (props.modal.type) {
        case "createCharacter":
            component = <CreateCharacterForm />
            break;
        default:
            return null;
    };

    const closeModal = () => {
        props.closeModal();
        // props.clearErrors();
    };

    return (
        <div className="modal-background" onClick={closeModal}>
          <div className="modal-child" onClick={e => e.stopPropagation()}>
            { component }
          </div>
        </div>
    );
}

export default Modal;