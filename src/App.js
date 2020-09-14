import React from 'react';
import {
  Layout
} from './styles';

import LayoutSidBar from './components/Sidbar/Sidbar';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <LayoutSidBar>
        </LayoutSidBar>
        <Routes>
        </Routes>
        <div>

        </div>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
