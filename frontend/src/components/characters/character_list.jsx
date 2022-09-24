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

    const [char, setChar]= useState('26px');

    const dispatch = useDispatch();
    let {
        fetchBookCharacters,
        openModal,
        bookId,
    } = props;

    const allCharacters = useSelector((state)=>Object.values(state.characters));


    useEffect(() => {
        fetchBookCharacters(bookId)
    }
    , [bookId]);


    const handleDeleteCharacter = (id) =>{
        
        dispatch(removeCharacter(id))
    }

    const handleChar = () =>{
        if (char==="26px"){
            setChar('')
        }else{
            setChar('26px')   
        }
    }

    return (
        <div>
            <div className="add-char-icon" onClick={() => openModal("createCharacter", { bookId: bookId })}>
                <h3>Characters</h3>
                <GrAddCircle className="add" />
            </div>
            <div className="characters-container">
                {allCharacters.map((character, idx) => (
                    <div className={`character-show`} style={{maxHeight: char}} onClick={()=> handleChar(char)} key={idx}>
                        <div className="char char-name">
                            <div>
                                <p className="char-title">Name:</p>
                                <p>{character.name}</p>
                            </div>
                            <div>
                                <button onClick={() => {handleDeleteCharacter(character._id)}}><RiDeleteBin5Line /></button>
                                <button onClick={() => openModal("updateCharacter", { bookId: bookId, characterId: character._id })}><FaEdit /></button>
                            </div>
                        </div>
                        <div className="char char-age">
                            <p className="char-title">Age:</p>
                            <p>{character.age}</p>
                        </div>
                        <div className="char char-sex">
                            <p className="char-title">Sex:</p>
                            <p>{character.sex}</p>
                        </div>
                        <div className="char char-height">
                            <p className="char-title">Height:</p>
                            <p>{character.height}</p>
                        </div>
                        <div className="char char-weight">
                            <p className="char-title">Weight:</p>
                            <p>{character.weight}</p>
                        </div>
                        <div className="char char-species">
                            <p className="char-title">Species:</p>
                            <p>{character.species}</p>
                        </div>
                        <div className="char char-description">
                            <p className="char-title">Description:</p>
                            <p>{character.description}</p>
                        </div>
                    </div>)
                )}
            </div>
        </div>
    )
};

const mSTP = (state, ownProps) => {
    console.log("characterList", ownProps)
    return {
        bookId: ownProps.bookId,
        characters: state.characters,
}};

const mDTP = dispatch => ({
    fetchBookCharacters: (bookId) => dispatch(fetchBookCharacters(bookId)),
    openModal: (modal, props) => dispatch(openModal(modal, props))
})

export default connect(mSTP, mDTP)(CharacterList)