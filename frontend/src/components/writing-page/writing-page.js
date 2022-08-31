import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/04-writing-page.css";
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; // Add css for snow theme 
import axios from "axios";
import { updateBook } from "../../util/book_api_util";

const WritingPage = (props) => {
    let {book} = props;
    
    const { quill, quillRef } = useQuill();

    //current state, updating the current state
    const [content, setContent] = useState();   

    React.useEffect(() => {
        if (quill) {
            quill.root.innerHTML = book.content;
            quill.on('text-change', () => {
                setContent(quill.getText());
                book.content = quill.root.innerHTML;
            });
        }
    }, [quill]);



    // Save to the database
    const onSubmit = (e) =>{
        e.preventDefault();
        book={
            title: book.title,
            editor: book.editor,
            genre: book.genre,
            author: book.author,
            description: book.description,
            content: book.content,
            id: book._id
        }
        updateBook(book);
        setContent("");
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