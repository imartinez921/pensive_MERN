import { connect } from "react-redux";
import React from 'react';
import { removeCharacter,
} from '../../actions/character_actions'
import { removeBook,
} from "../../actions/book_actions";

import DeletionModal from "./deletion_modal";
import { openModal, closeModal } from '../../actions/modal_actions';



const mapStateToProps = (state, ownProps) => {
  return ({
    // delete_type: PASS THIS IN FROM PARENT PROPS,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    removeCharacter: id => dispatch(removeCharacter(id)),
    removeBook: id => dispatch(removeBook(id)),
    // otherForm: (
    //   <a
    //     href="#"
    //     className="modal__btn-other-form"
    //     onClick={() => dispatch(openModal('signup', {}))}>
    //     Sign Up
    //   </a>
    // ),
    closeModal: () => dispatch(closeModal())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(DeletionModal);