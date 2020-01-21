import React from 'react';
import {Switch, Route} from "react-router-dom";
import Subscriptions  from '../scenes/Subscriptions'
import Home from '../scenes/Home';

const Router = () => (
    <Switch>
        <Route exact path='/' component={Home} />        
        <Route exact path='/subs' component={Subscriptions} />    
    </Switch>
);

export default Router;