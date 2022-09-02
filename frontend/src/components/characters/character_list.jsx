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
    const [state, setState] = useState({
        characters: props.characters
    });

    useEffect(() => {
        props.fetchBookCharacters(props.bookId)
    }, []);

    const renderCharacters = () => {
        props.fetchBookCharacters(props.bookId).then(characters => {
            setState({
                characters
            });
        });
    };

    const display = (
        Object.values(props.characters).map(character => (
            <div>
                <li>Name: {character.name}</li>
            </div>
        ))
    )

    return (
        <div>
            <div id="add-char-icon" onClick={() => props.openModal("createCharacter", { bookId: props.bookId, renderCharacters: renderCharacters })}>
                <h3>Characters</h3>
                <GrAddCircle style={{ color: ' #FED168', size: '50px', transform: "scale(2)"}} id="add" onMouseOver={({ target }) => target.style.color = "white"} />
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