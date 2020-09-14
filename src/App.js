import React from 'react';
import {
  Layout
} from './styles';

import LayoutSidBar from './components/Sidbar/Sidbar';
import Feed from './pages/Feed/Feed';
function App() {
  return (
    <Layout>
      <LayoutSidBar>

      </LayoutSidBar>
      <Feed>

      </Feed>
      <div>

      </div>
    </Layout>
  );
}

export default App;
