import React, { Component, cloneElement, PropTypes } from 'react';
import { connect } from 'react-redux';
import { APP_BAR } from '../actions/types';
import { open, close } from '../actions/appBar';
import MainComponent from '../components/Main';
import Index from '../components/Index';
import Reader from './Reader';
import { Route } from 'react-router-dom';

const mapStateToProps = state => ({
  status: state[APP_BAR]
});

class MainContainer extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    status: PropTypes.bool.isRequired,
    IndexChildren: PropTypes.object.isRequired,
    ReaderChildren: PropTypes.object.isRequired,
  };

  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  handleOpenAppBar = () => {
    this.props.dispatch(open);
  };

  handleCloseAppBar = () => {
    this.props.dispatch(close);
  }

  handleRequestHome = () => {
    if (this.getPathname() !== '/') {
      const { router: { history: { push } } } = this.context;
      push('/');
      this.handleCloseAppBar();
    }
  };
 
  getPathname() {
    const { router: { route: { location: { pathname } } } } = this.context;
    return pathname;
  }

  render() {
    const { status, IndexChildren, ReaderChildren } = this.props;

    return (
      <MainComponent
        pathname={this.getPathname()}
        status={status}
        handleOpenAppBar={this.handleOpenAppBar}
        handleCloseAppBar={this.handleCloseAppBar}
        handleRequestHome={this.handleRequestHome}
        IndexChildren={IndexChildren}
        ReaderChildren={ReaderChildren}
      />
    );
  }
}

// 临时解决方法～因为将路由写在 connect 绑定的state中改变路由后不会执行路由匹配，解决方法暂时不明确。
const Container = connect(mapStateToProps)(MainContainer);
const Main = () => (
  <Container
    IndexChildren={<Route exact path="/" component={Index} />}
    ReaderChildren={<Route path="/:version/:language/:md*" component={Reader} />}
  />
);

export default Main;
