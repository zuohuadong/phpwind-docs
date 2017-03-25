import React, { Component, PropTypes } from 'react';
import Fans from '../icons/Fans';

class FansTitleComponent extends Component {

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  render() {
    const { muiTheme: { appBar } } = this.context;

    return (
      <div
        style={{
          display: 'inline-flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Fans
          color={appBar.textColor}
          style={{
            height: appBar.height,
            width: appBar.height
          }}
        />
        &nbsp;Notadd
      </div>
    );
  }
}

export default FansTitleComponent;
