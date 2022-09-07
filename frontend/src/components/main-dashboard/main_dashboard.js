import React from "react";
import { withRouter } from "react-router-dom";
// import BookBox from "./book_box";
// import BooksContainer from "../books/books_container";
import ProfileContainer from "../profile/profile_container";
import LoggedInNavbar from "../logged-in-navbar/logged_in_navbar_container";
import '../../assets/css/01-main-dashboard.css';
import '../../assets/css/09-students-info.css';


class MainDashboard extends React.Component {
    constructor(props) {
        super(props);
    }
    

    render() {
        const STUDENTS = [
            { name: "claire", github: "shuyangn", linkedin: "shuyang-ning", angelist: "shuyang-ning"},
            { name: "irene", github: "imartinez921", linkedin: "irenemartinez921", angelist: "imartinez921"},
            { name: "leonel", github: "leonel040792", linkedin: "leonel-colina", angelist: "leonel-colina"},
            { name: "shengzhi", github: "ShengzhiLuo", linkedin: "shengzhi-luo", angelist: "shengzhi-luo"},
        ]
        return(
            <>
            <div className="main-dashboard" >
                <LoggedInNavbar />
                    <ProfileContainer history={ this.props.history} />
                <div className="temporary">
                    <div className="students-container">
                        {STUDENTS.map((student, key) => {


                            return (
                                <>
                                    <div className={`single-student ${student}`}  key={key}>
                                        <div className="student-face">
                                            <img src={require(`../../assets/images/${student.name}.jpeg`)}/>
                                        </div>
                                        <div className="student-name">
                                            <p>{student.name}</p>
                                        </div>
                                        <div className="student-links">
                                            <a href={`https://angel.co/u/${student.angelist}`} target="_blank">
                                                <img src={require("../../assets/images/angelist.png")} />
                                            </a>
                                            <a href={`https://github.com/${student.github}`} target="_blank">
                                                <img src={require("../../assets/images/github.png")} />
                                            </a>
                                            <a href={`https://www.linkedin.com/in/${student.linkedin}/`} target="_blank">
                                                <img src={require("../../assets/images/linkedin.png")} />
                                            </a>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
            </>
        )

    }
}

export default withRouter(MainDashboard);