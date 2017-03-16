import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Main from './components/Main';

const theme = getMuiTheme(lightBaseTheme);

const App = () => (
  <MuiThemeProvider muiTheme={theme}>
    <HashRouter>
      <Main />
    </HashRouter>
  </MuiThemeProvider>
);

export default App;
