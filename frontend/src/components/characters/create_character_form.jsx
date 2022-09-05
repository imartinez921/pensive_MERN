import React, {useState, useEffect} from "react";
import { connect, useDispatch } from "react-redux";
import { composeCharacter } from "../../actions/character_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import { clearErrors } from "../../actions/character_actions";
import '../../assets/css/06-create-char-form.css';
import { IoCloseCircle } from "react-icons/io5";

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
        props.composeCharacter(state)
            .then(props.closeModal)
    }

    const closeModal = () => {
        props.closeModal();
    }

    const render = () => {
        return (
            <div>
                <div className="modal__btn-close" onClick={closeModal}>          
                    <IoCloseCircle style={{color: '#cc5500', fontSize: '35px'}}/>
                </div>
                <div className="modal__header">Create a character</div>
                <div className="session-errors">
                            {renderErrors()}
                </div>                
                <div>
                    <form className='character-form' onSubmit={handleSubmit}>
                        <label id = "label">Name:
                            <input
                                type='text'
                                onChange={update("name")}
                                id = "name"
                                />
                        </label>
                        <label id = "label">Age:
                            <input
                                type='number'
                                onChange={update("age")}
                                min="0" max="500"
                                name="age"
                                id = "age"
                            />
                        </label>
                        <div id='sex'>
                            Sex:
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
                        <br />
                        <label id = "label">Height:
                            <input
                                type='number'
                                onChange={update("height")}
                                min="0"
                                name="height"
                                id="height"
                            />cm
                        </label>
                        <label id = "label">Weight:
                            <input
                                type='number'
                                onChange={update("weight")}
                                min="0"
                                name="weight"
                                id = "weight"
                            />kg
                        </label>
                        <label id = "label">Species:
                            <input
                                type='text'
                                onChange={update("species")}
                            id = "species"
                            />
                        </label>
                        <label id = "label">Description - Details regarding physical features, childhood background or pre-story history, personality traits, patterns of speech, and relationships (eg. alliances, rivalries, family members, etc.)
                        <br />
                            <textarea
                                type='text'
                                placeholder='The more detail, the better!'
                                onChange={update("description")}
                                id = "description"
                            />
                        </label>
                        <button type='submit' className="modal-session-submit-button">
                            <div>Create Character</div>
                        </button>
                    </form>
                </div>
            </div>
        )
    }

    return render();

}


// Create Character Form Container
const mSTP = (state) => ({
    bookId: state.ui.modal.props.bookId,
    renderCharacters: state.ui.modal.props.renderCharacters,
    errors: state.errors.character,
})

const mDTP = (dispatch) => ({
    composeCharacter: (character) => dispatch(composeCharacter(character)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(CreateCharacterForm);