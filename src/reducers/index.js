import {combineReducers} from 'redux'
import dogReducer from './dogReducer'

const rootReducers = combineReducers({
    dogs: dogReducer
})

export default rootReducers