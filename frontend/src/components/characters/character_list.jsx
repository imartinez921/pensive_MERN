import React, { useEffect, useState }from "react";
import { connect } from "react-redux";
import { fetchBookCharacters } from "../../actions/character_actions";
import { openModal } from "../../actions/modal_actions";
import { useHistory } from "react-router-dom";
// import characters from "../../../../validation/characters";
import {GrAddCircle} from "react-icons/gr"
import '../../assets/css/07-char-list.css'


const CharacterList = (props) => {
    console.log('CHARACTERLIST PROPS', props)

    let { characters,
        fetchBookCharacters,
        openModal,
        currentBookId,
    } = props;

    const [allCharacters, setAllCharacters] = useState(characters)


    let display;
    // useEffect(() => {
    //     renderCharacters()
    //     .then
    //     (display = (
    //         <h1>HERE IS MY DISPLAY</h1>
    //             // characters.map( (character, i) => (
    //             //     <div className="character-show">
    //             //         <li key={`${char acter.name}+${i}`}>Name: {character.name}</li>
    //             //     </div>
    //         // ))
    //     ))

    // }, []);

    const renderCharacters = () => {
        console.log('RENDERING CHARACTERS')
        fetchBookCharacters(currentBookId) // response is an action {type, characters}
        .then( res => setAllCharacters(res.characters))
    }

    return (
        <div>
            <div className="add-char-icon" onClick={() => openModal("createCharacter", { bookId: currentBookId, renderCharacters: renderCharacters })}>
                <h3>Characters</h3>
                <GrAddCircle className="add" />
            </div>
            <div>
                {display}
            </div>
        </div>
    )
};

const mSTP = (state, ownProps) => {
    return {
        characters: state.characters,
        books: state.books,
        currentUser: state.session.user,
        currentBookId: ownProps.currentBookId,
}};

const mDTP = dispatch => ({
    fetchBookCharacters: (bookId) => dispatch(fetchBookCharacters(bookId)),
    openModal: (modal, props) => dispatch(openModal(modal, props))
})

export default connect(mSTP, mDTP)(CharacterList)