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
    // deleteType: ownProps.deleteType // PASS THIS IN FROM PARENT PROPS,
    // redirectTo: ownProps.redirectTo // PASS THIS IN FROM PARENT PROPS,
    // itemId: ownProps.itemId // PASS THIS IN FROM PARENT PROPS,
    // history: ownProps.history // PASS THIS IN FROM MainDashboard/WritingPageContainer
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    removeCharacter: (id) => dispatch(removeCharacter(id)),
    removeBook: (id) => dispatch(removeBook(id)),
    closeModal: () => dispatch(closeModal()),
    // otherForm: (
    //   <a
    //     href="#"
    //     className="modal__btn-other-form"
    //     onClick={() => dispatch(openModal('signup', {}))}>
    //     Sign Up
    //   </a>
    // ),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(DeletionModal);