import { createStore } from 'redux'
import { uuid } from 'uuidv4'
import reducer from './reducer'

const MAX_HEIGHT = 600
const INITIAL_STATE = {
  arr: [...Array(3)].map(() => {
    return {
      height: Math.floor(Math.random() * MAX_HEIGHT + 20),
      key: uuid()
    }
  }),
  algorithm: null,
  isSorting: false
}
const store = createStore(
  reducer,
  INITIAL_STATE,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
