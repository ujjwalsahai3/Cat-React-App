import {createStore} from 'redux'
import rootReducers from './reducers'

const appStore=createStore(
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default appStore;