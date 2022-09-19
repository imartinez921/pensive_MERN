import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BsFillBackspaceFill } from 'react-icons/bs';
import "../../assets/css/11-chapters-page.css"


const Chapters = ({ bookId, fetchBookChapters }) => {
    // const {bookId, fetchBookChapters} = props;
    const history = useHistory();
    const [chapters, setChapters] = useState([]);

    useEffect(() => {
        fetchBookChapters(bookId)
        .then(action => {
            setChapters(action.chapters)
        })
    }, []);

    const handleClick = () => {
        history.push("/profile")
    };
    //This will work as well but instead of using component state
    //we would be using the redux state
    // const chapters = Object.values(u seSelector(state => state.chapters))

    return(
        <div className="chapters-main-section-container">
            <div id="back-to-profile">
                <button onClick={handleClick}><BsFillBackspaceFill /></button>
            </div>
            <h2>Your Chapters</h2>
            <div className="all-chapters-container">     
                {Object.values(chapters).map((chapter, idx) => (
                    <Link to={`/writing_page/${bookId}`} className="chapter-title-link">{chapter.title}</Link>
                ))}
                <Link to={"/new_book"} className="add-book">+</Link>
            </div>
            <form>
                <label>Title
                    <input type="text" />
                </label>
                <label>Description
                    <input type="text" />
                </label>
                <button>Create</button>
            </form>
        </div>
    )
}
export default Chapters;