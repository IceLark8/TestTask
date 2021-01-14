import { combineReducers } from 'redux'
import message from './message'

const rootReducer = combineReducers({
    message: message,
})

export default rootReducer;