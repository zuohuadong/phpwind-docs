import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './containers/Main';
import store from './createStore';
import theme from './styles//fansTheme';

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
