import { createStore } from 'redux'
import reducer from './reducer'

const INITIAL_STATE = {
  arr: [...Array(30)].map(() => {
    return Math.floor(Math.random() * 30 * 18 + 20)
  }),
  algorithm: null,
  isSorting: false
}
const store = createStore(reducer, INITIAL_STATE)

export default store
