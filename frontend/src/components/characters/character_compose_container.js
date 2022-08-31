import { connect } from "react-redux";
import { composeCharacter, clearErrors } from "../../actions/character_actions";
import CharacterCompose from "./character_compose";

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,     //?currentBook
    newCharacter: state.characters.new,
    errors: state.errors.character,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    composeCharacter: (data) => dispatch(composeCharacter(data)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCompose);