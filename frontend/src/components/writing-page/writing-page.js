import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/04-writing-page.css";
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; // Add css for snow theme 
import axios from "axios";
import { updateBook } from "../../util/book_api_util";

const WritingPage = (props) => {
    const {selected} = props;
    const { quill, quillRef } = useQuill();
    console.log(props.book)
    //current state, updating the current state
    const [content, setContent] = useState();   



    React.useEffect(() => {
        if (quill) {
            quill.on('text-change', () => {
                console.log(quill.getText()); // Get text only
                setContent(quill.getText());
                console.log(quill.root.innerHTML); // Get innerHTML using quill
            });
        }
    }, [quill]);



    // Save to the database
    const onSubmit = (e) =>{
        e.preventDefault();
       
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
                        <p>{content}</p>
                    </div>
                    <div className="right-container-temp" ></div>
                </div>
            </>
        )
}

    
export default WritingPage;



// export default WritingPage;