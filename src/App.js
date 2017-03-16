import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Main from './components/Main';

const theme = getMuiTheme(lightBaseTheme);

let basename = '';
if (window.location.hostname === 'github.com') {
  basename = '/' + window.location.pathname.split('/')[1];
}

const supportsHistory = 'pushState' in window.history;

const App = () => (
  <MuiThemeProvider muiTheme={theme}>
    <BrowserRouter
      basename={basename}
      forceRefresh={supportsHistory}
    >
      <Main />
    </BrowserRouter>
  </MuiThemeProvider>
);

export default App;
