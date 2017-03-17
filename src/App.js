import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Main from './containers/Main';
import store from './createStore';

const theme = getMuiTheme(lightBaseTheme);

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={theme}>
      <HashRouter>
        <Main />
      </HashRouter>
    </MuiThemeProvider>
  </Provider>
);

export default App;
