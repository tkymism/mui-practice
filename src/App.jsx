import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Dashboard from './Dashboard'
import Checkout from './Checkout'

const Router = () => (
    <BrowserRouter>
        <Route exact path='/'    component={Dashboard}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/checkout'  component={Checkout}/>
    </BrowserRouter>
)

export default Router
  