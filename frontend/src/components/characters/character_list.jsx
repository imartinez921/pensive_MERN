import React, { useEffect, useState }from "react";
import { connect, useSelector } from "react-redux";
import { fetchBookCharacters, editCharacter, removeCharacter } from "../../actions/character_actions";
import { openModal } from "../../actions/modal_actions";
// import characters from "../../../../validation/characters";
import {GrAddCircle} from "react-icons/gr";
import '../../assets/css/07-char-list.css';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';
import { useDispatch } from "react-redux";


const CharacterList = (props) => {
    // console.log('CHARACTERLIST PROPS', props)

    const dispatch = useDispatch();
    let {
        fetchBookCharacters,
        openModal,
        bookId,
    } = props;

    // const [allCharacters, setAllCharacters] = useState([])
    const allCharacters = useSelector((state)=>Object.values(state.characters));
    useEffect(() => {
        fetchBookCharacters(bookId)
    }
    , [bookId]);


    const handleDeleteCharacter = (id) =>{
        dispatch(removeCharacter(id))
    }

    return (
        <div>
            <div className="add-char-icon" onClick={() => openModal("createCharacter", { bookId: bookId })}>
                <h3>Characters</h3>
                <GrAddCircle className="add" />
            </div>
            <div>
                {allCharacters.map((character, idx) => (
                    <div className="character-show" key={idx}>
                        <p>{character.name}</p>
                        <button onClick={() => {handleDeleteCharacter(character._id)}}><RiDeleteBin5Line /></button>
                        <button onClick={() => openModal("updateCharacter", { bookId: bookId, characterId: character._id, character: character })}><FaEdit /></button>
                        <p>{character.age}</p>
                        <p>{character.sex}</p>
                        <p>{character.height}</p>
                        <p>{character.weight}</p>
                        <p>{character.species}</p>
                        <p>{character.description}</p>
                    </div>)
                )}
            </div>
        </div>
    )
};

const mSTP = (state, ownProps) => {
    return {
        bookId: ownProps.chapter.bookId,
        characters: state.characters,
}};

const mDTP = dispatch => ({
    fetchBookCharacters: (bookId) => dispatch(fetchBookCharacters(bookId)),
    openModal: (modal, props) => dispatch(openModal(modal, props))
})

export default connect(mSTP, mDTP)(CharacterList)