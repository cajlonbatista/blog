import React from 'react';
import { Switch, Route } from "react-router-dom";
import Feed from "./pages/Feed/Feed";
import SingleNews from './pages/SingleNews/SingleNew';
import NotFound from './pages/NotFound/Found';
import Search from './pages/Search/Search';
import Skill from './pages/Skills/Skill';

export default function Routes(){
    return(
        <Switch>
            <Route path="/" component={Feed} exact></Route>
            <Route path="/article/:_id" component={SingleNews} exact></Route>
            <Route path="/search" exact component={Search}></Route>
            <Route path="/skills" exact component={Skill}></Route>
            <Route path="*" exact component={NotFound}></Route>
        </Switch>
    );
}