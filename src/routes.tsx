import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Feed from './pages/Feed';
import Login from './pages/Login';

function Routes() {
    return(
        <Switch>
            <Route path='/' exact component={ Login }/>
            <Route path='/feed' component={ Feed }/>            
        </Switch>
    )
}

export default Routes;