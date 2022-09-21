import React, { useEffect, useState }from "react";
import { connect } from "react-redux";
import { fetchBookCharacters } from "../../actions/character_actions";
import { openModal } from "../../actions/modal_actions";
import { useHistory } from "react-router-dom";
// import characters from "../../../../validation/characters";
import {GrAddCircle} from "react-icons/gr"
import '../../assets/css/07-char-list.css'


const CharacterList = (props) => {
    // console.log('CHARACTERLIST PROPS', props)

    let {
        fetchBookCharacters,
        openModal,
        bookId,
    } = props;

    const [allCharacters, setAllCharacters] = useState([])

    useEffect(() => {
        fetchBookCharacters(bookId)
        .then( res => setAllCharacters(res.characters))
    }
    , [bookId]);

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
}};

const mDTP = dispatch => ({
    fetchBookCharacters: (bookId) => dispatch(fetchBookCharacters(bookId)),
    openModal: (modal, props) => dispatch(openModal(modal, props))
})

export default connect(mSTP, mDTP)(CharacterList)