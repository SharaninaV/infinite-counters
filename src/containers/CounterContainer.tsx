import Counter from "../components/Counter"
import {updateCounter} from "../redux/actions"
import {connect} from "react-redux"
import {Dispatch} from "redux";

const mapDispatchToProps = (dispatch: Dispatch) => ({
    updateCounter: (id: number, value: number) => {dispatch(updateCounter(id, value))}
})

export default connect(null, mapDispatchToProps)(Counter)