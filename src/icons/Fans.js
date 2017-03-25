import React, { Component, PropTypes } from 'react';
import SvgIcon from 'material-ui/SvgIcon';

class Fans extends Component {

  static propTypes = {
    trunkColor: PropTypes.string,
    wingTopColor: PropTypes.string,
    wingButtonColor: PropTypes.string,
    tailColor: PropTypes.string,
  };

  render() {

    const { color } = this.props;
    const { trunkColor = color, wingTopColor = color, wingButtonColor = color, tailColor = color, ...props } = this.props;

    return (
      <SvgIcon {...props} color={color} viewBox="0 0 60 60">
        <path d="M656.913067 866.8672l-92.023467-57.719467-179.3024-513.809066L0 910.114133V1024h1024V281.6L656.913067 866.8672z" p-id="810" fill="#ffffff"></path><path d="M369.015467 117.333333l84.053333 52.701867 187.562667 518.3488L1024 77.1584V0H0v705.672533L369.015467 117.333333z" p-id="811" fill="#ffffff"></path>
//<polygon class="751a9508-07e8-4c83-a462-2ceb3d849d22" points="384.91 507.93 330.99 474.11 225.93 173.05 0 533.27 0 600 600 600 600 165 384.91 507.93"/><polygon class="751a9508-07e8-4c83-a462-2ceb3d849d22" points="216.22 68.75 265.47 99.63 375.37 403.35 600 45.21 600 0 0 0 0 413.48 216.22 68.75"/>
      </SvgIcon>
    );
  }
}

export default Fans;
