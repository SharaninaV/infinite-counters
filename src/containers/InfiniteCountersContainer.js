import { countersSelector } from "../redux/selectors"
import { InfiniteCounters } from "../components/InfiniteCounters"
import { connect } from "react-redux"
import { addCounter, deleteCounter } from "../redux/actions"

const mapStateToProps = (state) => ({
    counters: countersSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
    addCounter: (counters) => {dispatch(addCounter(counters))},
    deleteCounter: (id) => {dispatch(deleteCounter(id))}
})

export default connect(mapStateToProps, mapDispatchToProps)(InfiniteCounters)