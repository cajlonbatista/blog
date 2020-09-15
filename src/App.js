import React from 'react';
import {
  Layout
} from './styles';

import LayoutSidBar from './components/Sidbar/Sidbar';
import { BrowserRouter as Router,Route , useRouteMatch } from 'react-router-dom';
import Double from './components/Double/Double';

import Routes from './routes';
function App() {
  return (
    <Router>
      <Layout >
        <LayoutSidBar>
        </LayoutSidBar>
        <Routes></Routes>
        <Double>
        </Double>
      </Layout>
    </Router>
  );
}

export default App;
