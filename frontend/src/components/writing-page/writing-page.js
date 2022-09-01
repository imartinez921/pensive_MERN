import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/04-writing-page.css";
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; // Add css for snow theme 
import axios from "axios";
import { updateBook } from "../../util/book_api_util";

const WritingPage = (props) => {
    let {book} = props;
    
    const { quill, quillRef } = useQuill();


    const [currentBook, setCurrentBook] = useState(book)

    useEffect(()=>{
            setCurrentBook(JSON.parse(window.localStorage.getItem('currentBook')))
    },[])

    useEffect(() => {
        window.localStorage.setItem('currentBook', JSON.stringify(currentBook))
    }, [currentBook])


    React.useEffect(() => {
        if (quill) {git
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

        return (
            <>
                <div className="writing-page-main-container">
                    <div className="left-container-temp"></div>
                    <div className="middle-container-temp">
                        <div id="writing-piece">
                            <div ref={quillRef} />
                        </div>
                        <button type="submit" value="save" onClick={onSubmit}>Save</button>
                    </div>
                    <div className="right-container-temp" ></div>
                </div>
            </>
        )
}

    
export default WritingPage;