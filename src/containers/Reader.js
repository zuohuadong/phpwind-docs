import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import marked from 'marked';
import { connect } from 'react-redux';
import { highlightAuto } from 'highlight.js';
import { changeLanguageCurrent } from '../actions/language';
import { current } from '../actions/version';
import { changeItem } from '../actions/docs';
import { DOCS } from '../actions/types';
import ReaderComponent from '../components/Reader';

marked.setOptions({
  highlight: (code) => highlightAuto(code).value
});

const mapStateToProps = state => ({
  docs: state[DOCS]
});

class ReaderContainer extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    docs: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { match: { params: { language, version, md } }, dispatch } = this.props;
    dispatch(changeLanguageCurrent(version, language));
    dispatch(current(version));
    this.handleRequestMarkdown(`/${version}/${language}/${md}`);
  }

  componentDidUpdate() {
    const { match: { url }, docs } = this.props;
    if (!(url in docs)) {
      this.handleRequestMarkdown(url);
    }
  }

  handleRequestMarkdown(path) {
    const { dispatch } = this.props;
    axios.get(`./assets${path}.md`)
    .then(({ data }) => {
      dispatch(changeItem(path, marked(data)));
    }).catch();
  }

  render() {

    const { match: { params: { language, version, md } }, docs } = this.props;
    const path = `/${version}/${language}/${md}`;
    const { [path]: doc = '' } = docs;

    return (
      <ReaderComponent
        doc={doc}
      />
    );
  }
}

export default connect(mapStateToProps)(ReaderContainer);
