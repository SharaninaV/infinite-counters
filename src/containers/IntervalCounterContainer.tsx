import IntervalCounter from "../components/IntervalCounter/IntervalCounter"
import { connect } from "react-redux"
import { updateCounter } from "../redux/actions"
import { Dispatch } from "redux"

const mapDispatchToProps = (dispatch: Dispatch) => ({
    updateCounter: (id: number, value: number) => {dispatch(updateCounter(id, value))}
})

export default connect(null, mapDispatchToProps)(IntervalCounter)