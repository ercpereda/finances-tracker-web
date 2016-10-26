import React from 'react';
import Router from 'react-router/BrowserRouter';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from '../containers/Header';
import MainSection from '../components/MainSection';

const App = () => (
  <Router>
    <MuiThemeProvider>
      <div>
        <Header />
        <MainSection />
      </div>
    </MuiThemeProvider>
  </Router>
);

export default App;
