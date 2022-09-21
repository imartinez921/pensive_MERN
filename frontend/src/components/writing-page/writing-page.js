import React, { useState, useEffect, useRef} from "react";
import { Link , useHistory} from "react-router-dom";
import "../../assets/css/04-writing-page.css";
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; // Add css for snow theme 
import CharacterListContainer from "../characters/character_list";
import { BsFillBackspaceFill } from 'react-icons/bs';
import DictionaryContainer from "../dictionary/dictionary_container";

const WritingPage = (props) => {
    console.log(props);
    let {chapter, fetchChapterById, editChapter} = props;
    const history = useHistory();


    if (!chapter){
        history.push(`/book/${chapter.bookId}`)
    }

    const { quill, quillRef } = useQuill();

    useEffect(() => {
        if (quill) {
            quill.root.innerHTML = chapter.content;
            quill.on('text-change', () => {
                chapter.content = quill.root.innerHTML;
            });
        }
    }, [quill]);

    // Save to the database
    const onSubmit = (e) =>{
        e.preventDefault();
        chapter={
            title: chapter.title,
            description: chapter.description,
            bookId: chapter.bookId,
            content: chapter.content,
            id: chapter._id
        }
        editChapter(chapter);
        history.push(`/book/${chapter.bookId}`)
        quill.root.innerHTML = "";
    }


    const handleClick = () => {
        if (window.confirm('Are you sure you want to go back? You will lose any unsaved changes')){
            history.push(`/book/${chapter.bookId}`)
        }
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
                    {chapter ? <CharacterListContainer chapterId={chapter._id} chapter={props.chapter} /> 
                    : null}
                </div>
                <div className="dictionary-container-mood">
                    <DictionaryContainer />
                </div>
            </div>
                    
                </div>
        )
}

    
export default WritingPage;