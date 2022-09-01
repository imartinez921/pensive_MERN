import React, { useEffect, useState }from "react";
import { connect } from "react-redux";
import { fetchBookCharacters } from "../../actions/character_actions";
import { openModal } from "../../actions/modal_actions";
import { useHistory } from "react-router-dom";
// import characters from "../../../../validation/characters";
import { BsFillBackspaceFill } from 'react-icons/bs';
import {MdOutlineAddToPhotos} from "react-icons/md"
import { fetchUserBooks } from "../../actions/book_actions";


const CharactersList = (props) => {
    const [state, setState] = useState({
        characters: props.characters
    });

    useEffect(() => {
        props.fetchBookCharacters(props.bookId)
    }, []);
    const history = useHistory();

    const handleClick = () => {
        history.push("/profile")
    };

    const renderCharacters = () => {
        props.fetchBookCharacters(props.bookId).then(characters => {
            setState({
                characters
            });
        });
    };

    return (
        <div>
            <div id="back-to-profile">
                <button onClick={handleClick}><BsFillBackspaceFill /></button>
            </div>
            <div onClick={() => props.openModal("createCharacter", { bookId: props.bookId, renderCharacters: renderCharacters })}>
                <MdOutlineAddToPhotos />
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