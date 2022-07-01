import IntervalCounter from "../components/IntervalCounter/IntervalCounter"
import { connect } from "react-redux"
import { updateCounter } from "../redux/actions"

const mapDispatchToProps = (dispatch) => ({
    updateCounter: (id, value) => {dispatch(updateCounter(id, value))}
})

export default connect(null, mapDispatchToProps)(IntervalCounter)