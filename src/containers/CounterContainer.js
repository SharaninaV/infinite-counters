import Counter from "../components/Counter/Counter"
import {updateCounter} from "../redux/actions"
import {connect} from "react-redux"

const mapDispatchToProps = (dispatch) => ({
    updateCounter: (id, value) => {dispatch(updateCounter(id, value))}
})

export default connect(null, mapDispatchToProps)(Counter)