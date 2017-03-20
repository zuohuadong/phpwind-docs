import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import IndexComponent from '../components/Index';
import { open } from '../actions/appBar';

class IndexContainer extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  handleOpenAppBar = () => {
    this.props.dispatch(open);
  };

  render() {
    return (
      <IndexComponent handleOpenAppBar={this.handleOpenAppBar} />
    );
  }
}

export default connect()(IndexContainer);
