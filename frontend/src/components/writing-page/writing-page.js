import React, { useState, useEffect, useRef} from "react";
import { Link , useHistory} from "react-router-dom";
import "../../assets/css/04-writing-page.css";
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; // Add css for snow theme 
import axios from "axios";
import { updateBook } from "../../util/book_api_util";
import CharacterListContainer from "../characters/character_list";
import { connect, useDispatch } from "react-redux";
import { BsFillBackspaceFill } from 'react-icons/bs';
import DictionaryContainer from "../dictionary/dictionary_container";

const WritingPage = (props) => {
    
    let {book,bookId, fetchBookById} = props;

    const { quill, quillRef } = useQuill();


    const [currentBook, setCurrentBook] = useState(book)

    useEffect(()=>{
            setCurrentBook(JSON.parse(window.localStorage.getItem('currentBook')))
    },[])

    useEffect(() => {
        window.localStorage.setItem('currentBook', JSON.stringify(currentBook))
    }, [currentBook])


    React.useEffect(() => {
        if (quill) {
            quill.root.innerHTML = currentBook.content;
            quill.on('text-change', () => {
                currentBook.content = quill.root.innerHTML;
            });
        }
    }, [quill]);

    // Save to the database
    const onSubmit = (e) =>{
        e.preventDefault();
        book={
            title: currentBook.title,
            editor: currentBook.editor,
            genre: currentBook.genre,
            author: currentBook.author,
            description: currentBook.description,
            content: currentBook.content,
            id: currentBook._id
        }
        updateBook(book);
        quill.root.innerHTML = "";
    }

    const history = useHistory();

    const handleClick = () => {
        history.push("/profile")
    };



    return (
                <div className="writing-page-main-container">
                     <div className="left-container-temp">
                    <div id="back-to-profile">
                        <button onClick={handleClick}><BsFillBackspaceFill /></button>
                    </div>
                    </div>
                    <div className="middle-container-temp">
                        <div id="writing-piece">
                            <div ref={quillRef} />
                        </div>
                        <button type="submit" value="save" onClick={onSubmit} className="save-book-writing">Save</button>
                    </div>
            <div className="right-container-temp" >
                <div>
                    <CharacterListContainer bookId={currentBook._id} book={currentBook} />
                </div>
                <div className="dictionary-container-mood">
                    <DictionaryContainer />
                </div>
            </div>
                    
                </div>
        )
}

    
export default WritingPage;