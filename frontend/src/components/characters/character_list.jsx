import React, { useEffect, useState }from "react";
import { connect } from "react-redux";
import { fetchBookCharacters } from "../../actions/character_actions";
import { openModal } from "../../actions/modal_actions";
import { useHistory } from "react-router-dom";
// import characters from "../../../../validation/characters";
import {GrAddCircle} from "react-icons/gr"
import { fetchUserBooks } from "../../actions/book_actions";
import '../../assets/css/07-char-list.css'


const CharactersList = (props) => {
    console.log('CHARACTERLIST PROPS', props)
    const [state, setState] = useState({
        characters: props.characters
    });
    
    let display;
    useEffect(() => {
        renderCharacters();

        display = (
            Object.values(props.characters).map(character => (
                <div className="character-show">
                    <li>Name: {character.name}</li>
                </div>
            ))
        )

    }, []);

    const renderCharacters = () => {
        props.fetchBookCharacters(props.currentBookId)
        .then(characters => {
            setState({
                characters
            });
        });
    };

    return (
        <div>
            <div className="add-char-icon" onClick={() => props.openModal("createCharacter", { bookId: props.currentBookId, renderCharacters: renderCharacters })}>
                <h3>Characters</h3>
                <GrAddCircle className="add" />
            </div>
            <div>
                {display}
                {/* {Object.values(props.characters).map(character => (character.name))} */}
            </div>
        </div>
    )
};

const mSTP = (state, ownProps) => ({
    characters: state.characters,
    books: state.books,
    currentUser: state.session.user,
});

const mDTP = dispatch => ({
    fetchBookCharacters: (bookId) => dispatch(fetchBookCharacters(bookId)),
    // fetchUserBooks: (user.id) => dispatch(fetchUserBooks(user.id)),
    openModal: (modal, props) => dispatch(openModal(modal, props))
})

export default connect(mSTP, mDTP)(CharactersList)