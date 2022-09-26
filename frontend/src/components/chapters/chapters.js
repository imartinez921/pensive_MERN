import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
import { BsFillBackspaceFill } from 'react-icons/bs';
import "../../assets/css/11-chapters-page.css";
import ChapterForm from "./chapter-form";
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';

const Chapters = ({ bookId, fetchBookChapters, composeChapter, deleteBookChapter, editChapter, chapters }) => {
    const history = useHistory();

    useEffect(() => {
        fetchBookChapters(bookId)
    }, []);

    const handleBack = () => {
        history.push("/profile")
    };
    //This will work as well but instead of using component state
    //we would be using the redux state
    // const chapters = Object.values(useSelector(state => state.chapters))


    //Form related
    const [allChapters, setAllChapters] = useState(chapters);
    const [chapt, setChapt] = useState();
    const [modal, setModal] = useState(false);
    const [formType, setFormType] = useState('');
    


    const handleDelete = (id)=>{
       if ( window.confirm('Are you sure you want to delete this chapter?')){
            deleteBookChapter(id).then(
                () => setAllChapters(Object.values(allChapters).filter(oneChapter => oneChapter._id !== id))

            )
        }
    }

    const handleModal = (action, wholeChapter = { title: '', description: '' }) =>{
        setFormType(action)
        setModal(!modal)
        setChapt(wholeChapter)
    }

    return(
        <div className="chapters-main-section-container">
            <div id="back-to-profile">
                <button onClick={handleBack}><BsFillBackspaceFill /></button>
            </div>
            <h2>Your Chapters</h2>
            <div className="all-chapters-container">     
                {Object.values(chapters).map((chapter, idx) => (
                    
                    <div key={idx}>
                        <Link to={`/writing_page/${bookId}/${chapter._id}`} className="chapter-title-link" >
                            <div>
                                {chapter.title}
                            </div>
                        </Link>
                        <button onClick={()=>{handleDelete(chapter._id)}} className="delete-chapter"><RiDeleteBin5Line /></button>
                        <button onClick={() => handleModal("update", chapter)} className="edit-chapter"><FaEdit/></button>
                    </div>
                        
                    
                ))}

                <button onClick={()=> handleModal("create")}  className="add-book add-chapter">+</button>

            </div>

            {modal && (<ChapterForm
                bookId={bookId}
                composeChapter={composeChapter}
                formType={formType}
                setModal={setModal}
                modal={modal}
                editChapter={editChapter}
                chapter={chapt}
            />)}
            
        </div>
    )
}
export default Chapters;