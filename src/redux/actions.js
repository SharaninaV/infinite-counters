import { ADD_COUNTER, DELETE_COUNTER, UPDATE_COUNTER } from "./constants"

export const addCounter = (counters) => ({ type: ADD_COUNTER, payload: { counters } })
export const updateCounter = (id, value) => ({ type: UPDATE_COUNTER, payload: { id: id, value: value } })
export const deleteCounter = (id) => ({ type: DELETE_COUNTER, payload: { id } })