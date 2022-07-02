import { countersSelector } from "../redux/selectors"
import { InfiniteCounters } from "../components/InfiniteCounters"
import { connect } from "react-redux"
import { addCounter, deleteCounter } from "../redux/actions"
import { Dispatch } from "redux"
import { IState } from "../redux/storeModel"
import { ICounter } from "../types"

const mapStateToProps = (state: IState) => ({
    counters: countersSelector(state)
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addCounter: (counters: ICounter[]) => { dispatch(addCounter(counters)) },
    deleteCounter: (id: number) => { dispatch(deleteCounter(id)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(InfiniteCounters)