import {
  UPDATE_ALGORITHM,
  UPDATE_ARRAY,
  START_SORTING,
  FINISH_SORTING
} from './actionTypes'

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
    case FINISH_SORTING:
      return {
        ...state,
        isSorting: false
      }
    default:
      return state
  }
}

export default reducer
