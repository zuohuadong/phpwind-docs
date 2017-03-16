import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const theme = getMuiTheme(lightBaseTheme);

import Main from './components/Main';

const App = () => (
  <MuiThemeProvider muiTheme={theme}>
    <HashRouter>
      <Main />
    </HashRouter>
  </MuiThemeProvider>
);

export default App;
