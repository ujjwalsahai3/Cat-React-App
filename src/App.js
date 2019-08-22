import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Dogs from './components/Dogs/Dogs'


export default function App(){
    return(
        <Layout>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/Dogs' component={Dogs} />
            </Switch>
        </Layout>
    )
}