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
        bookId,
    } = props;

    const [allCharacters, setAllCharacters] = useState(Object.values(characters))

    useEffect(() => {
        fetchBookCharacters(bookId) // response is an action {type, characters}
        // .then(res => console.log('allCharactersSET', res.characters))
        .then( res => setAllCharacters(res.characters))
    }
    , []);
    
    const renderCharacters = () => 
    {if (allCharacters.length !== undefined || allCharacters.length !== 0){ 
        {console.log('ALLCHARACTERS', allCharacters)}
            return ((allCharacters.map( (character, i) =>(
                <div className="character-show" key={character._id}>
                    <li key={`${character.name}+${i}`}>{character.name}</li>
                </div>)
        )))}}

    return (
        <div>
            <div className="add-char-icon" onClick={() => openModal("createCharacter", { bookId: bookId })}>
                <h3>Characters</h3>
                <GrAddCircle className="add" />
            </div>
            <div>
           {renderCharacters()}
            </div>
        </div>
    )
};

const mSTP = (state, ownProps) => {
    return {
        characters: state.characters,
        books: state.books,
        currentUser: state.session.user,
        currentBookId: ownProps.bookId,
}};

const mDTP = dispatch => ({
    fetchBookCharacters: (bookId) => dispatch(fetchBookCharacters(bookId)),
    openModal: (modal, props) => dispatch(openModal(modal, props))
})

export default connect(mSTP, mDTP)(CharacterList)