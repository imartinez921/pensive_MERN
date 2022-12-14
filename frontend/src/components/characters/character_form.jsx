import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import { composeCharacter, editCharacter } from "../../actions/character_actions";
import { closeModal } from "../../actions/modal_actions";
import { clearErrors } from "../../actions/character_actions";
import '../../assets/css/06-create-char-form.css';
import { IoCloseCircle } from "react-icons/io5";

const CharacterForm = ({
    bookId, 
    character,
    composeCharacter, 
    closeModal,
    modalType,
    editCharacter,
}) => {

    let stateObj;
    if (modalType === 'Create') {
        stateObj = {
            name: '',
            age: '',
            sex: '',
            height: '',
            weight: '',
            species: '',
            description:'',
            bookId: bookId,
        }
    }
    if (modalType === 'Update') {
        stateObj = {
            id: character._id,
            name: character.name,
            age: character.age,
            sex: character.sex,
            height: character.height,
            weight: character.weight,
            species: character.species,
            description: character.description,
            bookId: bookId,
        }
    };
    
    const [state, setState] = useState(stateObj);
    
    const update = (field) => {
        return e => {
            setState({...state, [field]: e.currentTarget.value})
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (modalType==="Create"){
            composeCharacter(state)
                .then(closeModal)
        }
        if (modalType==="Update"){
            editCharacter(state)
            .then(closeModal)
        }
       
    }

    return (
        <div>
            <div className="modal__btn-close" onClick={closeModal}>          
                <IoCloseCircle style={{color: '#cc5500', fontSize: '35px'}}/>
            </div>
            <div className="modal__header">{modalType} a character</div>
            <div className="session-errors">
            </div>                
            <div>
                <form className='character-form' onSubmit={handleSubmit}>
                    <label id = "label">Name:
                        <input
                            type='text'
                            onChange={update("name")}
                            id = "name"
                            defaultValue={stateObj.name}
                            />
                    </label>
                    <label id = "label">Age:
                        <input
                            type='number'
                            onChange={update("age")}
                            min="0" max="500"
                            name="age"
                            id = "age"
                            defaultValue={stateObj.age}
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
                                defaultChecked={"female" === stateObj.sex}
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
                                defaultChecked={"male" === stateObj.sex}
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
                                defaultChecked={"other" === stateObj.sex}
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
                            defaultValue={stateObj.height}
                        />cm
                    </label>
                    <label id = "label">Weight:
                        <input
                            type='number'
                            onChange={update("weight")}
                            min="0"
                            name="weight"
                            id = "weight"
                            defaultValue={stateObj.weight}
                        />kg
                    </label>
                    <label id = "label">Species:
                        <input
                            type='text'
                            onChange={update("species")}
                            id = "species"
                            defaultValue={stateObj.species}
                        />
                    </label>
                    <label id = "label">Description - Details regarding physical features, childhood background or pre-story history, personality traits, patterns of speech, and relationships (eg. alliances, rivalries, family members, etc.)
                    <br />
                        <textarea
                            type='text'
                            placeholder='The more detail, the better!'
                            onChange={update("description")}
                            id = "description"
                            defaultValue={stateObj.description}
                        />
                    </label>
                    <button type='submit' className="modal-session-submit-button">
                        <div>{modalType} Character</div>
                    </button>
                </form>
            </div>
        </div>
    )


}


// Create Character Form Container
const mSTP = (state, ownProps) => {
    console.log(ownProps)
    return {
    modalType: ownProps.modalType,
    character: ownProps.character,
    bookId: ownProps.bookId,
}}

const mDTP = (dispatch) => ({
    composeCharacter: (character) => dispatch(composeCharacter(character)),
    editCharacter: (character) => dispatch(editCharacter(character)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(CharacterForm);