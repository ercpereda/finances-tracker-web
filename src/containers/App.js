import React from 'react';
import Router from 'react-router/BrowserRouter';

import Header from '../components/Header';
import MainSection from '../components/MainSection';

const App = () => (
  <Router>
    <div>
      <Header />
      <hr />
      <hr />
      <MainSection />
    </div>
  </Router>
);

export default App;
