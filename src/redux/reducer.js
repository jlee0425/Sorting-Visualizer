import { UPDATE_ALGORITHM, UPDATE_ARRAY, START_SORTING } from './actionTypes'

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_ARRAY:
      return {
        ...state,
        arr: action.payload
      }
    case UPDATE_ALGORITHM:
      return {
        ...state,
        algorithm: action.payload
      }
    case START_SORTING:
      return {
        ...state,
        isSorting: true
      }
    default:
      return state
  }
}

export default reducer
