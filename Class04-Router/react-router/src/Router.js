import React from 'react';
import {Switch, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Detail from "./components/Detail/Detail";

const Router = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/loquesea/:id" component={Detail} />
    </Switch>
);

export default Router;