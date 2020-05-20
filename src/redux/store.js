import { createStore } from 'redux'
import reducer from './reducer'

const INITIAL_STATE = {
  arr: [...Array(8)].map(() => {
    return {
      height: Math.floor(Math.random() * 30 * 18 + 20),
      color: 'lightblue'
    }
  }),
  algorithm: null,
  isSorting: false
}
const store = createStore(reducer, INITIAL_STATE)

export default store
