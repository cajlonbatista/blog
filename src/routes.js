import React from 'react';
import { Switch, Route } from "react-router-dom";
import Feed from "./pages/Feed/Feed";
import SingleNews from './pages/SingleNews/SingleNew';
import NotFound from './pages/NotFound/Found';

export default function Routes(){
    return(
        <Switch>
            <Route path="/" component={Feed} exact></Route>
            <Route path="/article/:_id" component={SingleNews} exact></Route>
            <Route path="*" exact component={NotFound}></Route>
        </Switch>
    );
}