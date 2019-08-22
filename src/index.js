import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import './index.css'
import appStore from './store'
import {Provider} from 'react-redux'



ReactDOM.render(
    (
        <BrowserRouter>
        <Provider store={appStore}>
            <App />
        </Provider>
        </BrowserRouter>
    ),
    document.querySelector('#root')
)