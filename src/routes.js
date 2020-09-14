import React from 'react';
import { Switch, Route } from "react-router-dom";
import SidBar from './components/Sidbar/Sidbar';
import Feed from "./pages/Feed/Feed";

export default function Routes(){
    return(
        <Switch>
            <Route path="/" component={Feed} exact></Route>
            <Route path="/" component={SidBar} exact></Route>

        </Switch>
    );
}