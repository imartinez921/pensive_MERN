import React, {useState, useEffect} from "react";
import { connect, useDispatch } from "react-redux";
import { composeCharacter } from "../../actions/character_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import { clearErrors } from "../../actions/character_actions";


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
            if (resp.type !== "RECEIVE_CHARACTER_ERRORS") {
                props.closeModal();
                props.renderCharacters();
            }
        })
    }
    const closeModal = () => {
        props.closeModal();
    }

    const render = () => {
        return (
            <div className="character-form">
                <div onClick={closeModal}>close</div>
                <div className="create-title">Create a character for your book</div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            onChange={update("name")}
                            placeholder = {"character's name"}
                        />
                        <br />
                        <input
                            type='text'
                            onChange={update("age")}
                            placeholder = {"character's age"}
                        />
                        <br />
                        <label> Sex
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
                        <input
                            type='text'
                            onChange={update("height")}
                            placeholder = {"character's height"}
                        />
                        <br />
                        <input
                            type='text'
                            onChange={update("weight")}
                            placeholder = {"character's weight"}
                        />
                        <br />
                        <input
                            type='text'
                            onChange={update("species")}
                            placeholder = {"character's species"}
                        />
                        <br />
                        <input
                            type='text'
                            onChange={update("description")}
                            placeholder = {"character's description"}
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

