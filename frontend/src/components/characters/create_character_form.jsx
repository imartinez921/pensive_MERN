import React, {useState, useEffect} from "react";
import { connect, useDispatch } from "react-redux";
import { composeCharacter } from "../../actions/character_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import { clearErrors } from "../../actions/character_actions";
import '../../assets/css/06-create-char-form.css';
import {AiOutlineCloseCircle} from "react-icons/ai"

const CreateCharacterForm = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearErrors())
    }, [dispatch])
    
    const [state, setState] = useState({
        name: '',
        age: '',
        sex: '',
        book: props.bookId,
        height: '',
        weight: '',
        species: '',
        description:''
    })
    
    const update = (field) => {
        return e => setState({
            ...state, [field]: e.currentTarget.value
        })
    }

    const renderErrors = () => {
        return(
          <ul>
            {Object.values(props.errors).map((error, i) => (
              <li key={`error-${i}`} className="room-errors">
                {error}
              </li>
            ))}
          </ul>
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.composeCharacter(state).then((resp) => {
            // if (resp.type !== "RECEIVE_CHARACTER_ERRORS") {
                props.closeModal();
                props.renderCharacters();
            // }
        })
    }
    const closeModal = () => {
        props.closeModal();
    }

    const render = () => {
        return (
            <div className="character-form">
                <div onClick={closeModal}><AiOutlineCloseCircle/></div>
                <div className="create-title">Create a character</div>
                <div >
                    <form onSubmit={handleSubmit}>
                        <label id = "label">Name: </label>
                        <input
                            type='text'
                            onChange={update("name")}
                            id = "name"
                            />
                        <label id = "label">Age: </label>
                        <input
                            type='number'
                            onChange={update("age")}
                            min="0" max="500"
                            name="age"
                            id = "age"
                        />
                        <br />
                        <label>Sex:
                            <div>
                                <div>
                                    <input
                                        type='radio'
                                        onClick={update("sex")}
                                        name="sex"
                                        id="female"
                                        value = "female"
                                    />
                                    <label htmlFor="female">Female</label>
                                </div>
                                <div>
                                    <input
                                        type='radio'
                                        onClick={update("sex")}
                                        name="sex"
                                        id="male"
                                        value = "male"
                                    />
                                    <label htmlFor="male">Male</label>
                                </div>
                                <div>
                                    <input
                                        type='radio'
                                        onClick={update("sex")}
                                        name="sex"
                                        id="other"
                                        value = "other"
                                    />
                                    <label htmlFor="other">Other</label>
                                </div>
                            </div>
                        </label>
                        <br />
                        <label id = "label">Height: </label>
                        <input
                            type='number'
                            onChange={update("height")}
                            min="0"
                            name="height"
                            id="height"
                        /><label>Cm</label>
                        <br />
                        <label id = "label">Weight: </label>
                        <input
                            type='number'
                            onChange={update("weight")}
                            min="0"
                            name="weight"
                            id = "weight"
                        /><label>Kg</label>
                        <br />
                        <label id = "label">Species: </label>
                        <input
                            type='text'
                            onChange={update("species")}
                           id = "species"
                        />
                        <br />
                        <label id = "label">Description: </label>
                        <textarea
                            type='text'
                            onChange={update("description")}
                            id = "description"
                        />
                        <div className="character-errors">
                            {renderErrors()}
                        </div>
                        <button type = 'submit' className="character-create-button">
                            <div>Create</div>
                        </button>
                    </form>
                </div>
            </div>
        )
    }

    return render();

}


const mSTP = (state) => ({
    bookId: state.ui.modal.props.bookId,
    renderCharacters: state.ui.modal.props.renderCharacters,
    errors: state.errors.character
})

const mDTP = (dispatch) => ({
    composeCharacter: (character) => dispatch(composeCharacter(character)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(CreateCharacterForm);

