import { countersSelector } from "../redux/selectors"
import {ICounter, InfiniteCounters} from "../components/InfiniteCounters"
import { connect } from "react-redux"
import { addCounter, deleteCounter } from "../redux/actions"
import {Dispatch} from "redux";
import {IState} from "../redux/storeModel";

const mapStateToProps = (state: IState) => ({
    counters: countersSelector(state)
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addCounter: (counters: ICounter[]) => {dispatch(addCounter(counters))},
    deleteCounter: (id: number) => {dispatch(deleteCounter(id))}
})

export default connect(mapStateToProps, mapDispatchToProps)(InfiniteCounters)