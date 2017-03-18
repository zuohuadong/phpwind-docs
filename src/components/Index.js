import React, { Component, PropTypes } from 'react';
import Fans from '../icons/Fans';

class IndexComponent extends Component {

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  render() {

    const { muiTheme: { appBar } } = this.context;

    return (
      <div
        style={{
          backgroundColor: appBar.color,
          textAlign:'center',
          paddingBottom: 15
        }}
      >
        <Fans
          color={'#fff'}
          style={{
            width: 140,
            height: 140
          }}
        />
        <h1 style={{
          fontWeight: 300,
          color: appBar.textColor
        }}
        >
          phpwind Fans
        </h1>
        <h2
          style={{
            color: appBar.textColor,
            fontWeight: 300,
            fontSize: 20,
            lineHeight: '28px',
            paddingTop: 19,
            marginBottom: 13,
            letterSpacing: 0
          }}
        >
          使用 PHP 和 MySQL 开发的高性能社区系统
        </h2>
      </div>
    );
  }
}

export default IndexComponent;
