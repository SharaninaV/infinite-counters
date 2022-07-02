import { ADD_COUNTER, DELETE_COUNTER, UPDATE_COUNTER } from "./constants"

const initialState = {
    counters: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_COUNTER: return {
            ...state,
            counters: action.payload.counters
        }
        case UPDATE_COUNTER: return {
            ...state,
            counters: state.counters.map(counter => {
                if (counter.id === action.payload.id) {
                    return { id: counter.id, value: action.payload.value }
                }
                return counter
            })
        }
        case DELETE_COUNTER:
            return {
            ...state,
            counters: state.counters.filter(counter => counter.id !== action.payload.id)
        }
        default: return state
    }
}