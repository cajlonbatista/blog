import React from 'react';
import {
  Layout
} from './styles';

import LayoutSidBar from './components/Sidbar/Sidbar';
import { BrowserRouter as Router,Route , useRouteMatch } from 'react-router-dom';
import Double from './components/Double/Double';
import Feed from "./pages/Feed/Feed";
import SingleNews from './pages/SingleNews/SingleNew';
function App() {
  return (
    <Router>
      <Layout >
        <LayoutSidBar>
        </LayoutSidBar>
        <Route path="/" component={Feed} exact></Route>
        <Route path="/article/:_id" component={SingleNews} exact></Route>
        <Route path="*"></Route>
        <Double>
        </Double>
      </Layout>
    </Router>
  );
}

export default App;
