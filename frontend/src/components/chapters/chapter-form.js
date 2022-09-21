import { useState, useEffect } from "react";
import "../../assets/css/12-chapters-form.css";

const ChapterForm = ({
    bookId,
    composeChapter,
    editChapter,
    formType,
    setModal,
    modal,
    chapter
}) =>{

    const [title, setTitle] = useState(chapter.title);
    const [description, setDescription] = useState(chapter.description);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newChapter = {
            title,
            description,
            bookId: bookId,
            content: '',
        }

        if (formType === "create") composeChapter(newChapter);
        if (formType === "update"){
            const updatedChapter = {
                title,
                description,
                bookId: bookId,
                content: '',
                id: chapter._id,
            }
            editChapter(updatedChapter);
        }

        setTitle('')
        setDescription('')
        setModal(!modal)
    }

    const handleBackground = () =>{
        setModal(!modal)
    }

    return(
        <div>
            <div className="chapter-modal-background" onClick={handleBackground}></div>
            <div className="chapter-form">
                <form onSubmit={handleSubmit}>
                    <label>Title
                        <input
                            type="text"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </label>
                    <label>Description
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </label>
                    <button>{formType} Chapter</button>
                    {/* { isPending && <button disabled>Creating Chapter...</button> } */}
                </form >
            </div>
        </div>
        
    )
}

export default ChapterForm;