import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'



export default function App(){
    return(
        <Layout>
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </Layout>
    )
}