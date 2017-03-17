import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import '../styles/mui-github-markdown.css';
import 'highlight.js/styles/default.css';

class ReaderComponent extends Component {

  static propTypes = {
    doc: PropTypes.string.isRequired,
  };


  render() {
    const { doc } = this.props;

    return (
      <Paper zDepth={0}>
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{__html: doc}}
          style={{
            marginTop: 20,
            marginBottom: 20,
            padding: '0 10px'
          }}
        />
      </Paper>
    );
  }
}

export default ReaderComponent;
