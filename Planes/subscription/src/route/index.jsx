import React from 'react';
import {Switch, Route} from "react-router-dom";
import Subscriptions  from '../scenes/Subscriptions'
import Home from '../scenes/Home';
import SignIn from '../scenes/SignIn';

const Router = () => (
    <Switch>
        <Route exact path='/' component={Home} />        
        <Route exact path='/subs' component={Subscriptions} />
        <Route exact path='/signIn' component={SignIn} />
    </Switch>
);

export default Router;