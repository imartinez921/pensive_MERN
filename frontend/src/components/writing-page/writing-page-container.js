import { connect } from "react-redux";
import WritingPage from "./writing-page";


const mapStateToProps = (state, ownProps) =>{ 
    return({
        book: state.books[ownProps.match.params.id]
    })
}


const mapDispatchToProps = (dispatch) => ({
    something: null
})

export default connect(mapStateToProps, mapDispatchToProps)(WritingPage);