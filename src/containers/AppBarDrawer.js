import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { VERSIONS, LANGUAGES, APP_BAR } from '../actions/types';
import { current, set } from '../actions/version';
import { changeLanguageCurrent, changeLanguages, changeLanguagesSummary } from '../actions/language';
import AppBarDrawerComponent from '../components/AppBarDrawer';

const mapStateToProps = state => ({
  ...state[VERSIONS],
  languages: state[LANGUAGES],
  status: state[APP_BAR]
});

class AppBarDrawerContainer extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    handleCloseAppBar: PropTypes.func.isRequired,
    handleOpenAppBar: PropTypes.func.isRequired,
    handleRequestHome: PropTypes.func.isRequired,
    current: PropTypes.string.isRequired,
    versions: PropTypes.array.isRequired,
    languages: PropTypes.object.isRequired,
    status: PropTypes.bool.isRequired,
    pathname: PropTypes.string.isRequired,
  };

  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  languagesLoadding = false;
  summaryLoadding = false;

  handleRequestMarkdown = path => {
    const { router: { history: { push } } } = this.context;
    push(path);
  };

  componentDidUpdate() {
    const { current: version, languages: allLanguage, dispatch } = this.props;
    const { [version]: { languages, current, summary } = {} } = allLanguage;
      
    if (version && !languages && this.languagesLoadding !== current) {
      this.languagesLoadding = current;
      axios.get(`./assets/${version}/language.json`)
      .then(({ data }) => {
        dispatch(changeLanguages(version, data.language, (current || data.current)));
        this.languagesLoadding = false;
      }).catch(() => {
        this.languagesLoadding = false;
        alert('加载语言包失败！');
      });
    }

    const summaryloaddingName = `${version}/${current}`;
    if (version && current && !summary && this.summaryLoadding !== summaryloaddingName) {
      this.summaryLoadding = summaryloaddingName;
      axios.get(`./assets/${version}/${current}/summary.json`)
      .then(({ data }) => {
        dispatch(changeLanguagesSummary(version, current, data));
        this.summaryLoadding = false;
      }).catch(() => {
        this.summaryLoadding = false;
      });
    }

  }

  componentDidMount() {
    const { dispatch, current: version } = this.props;
    axios.get('./assets/versions.json')
    .then(({ data }) => {
      dispatch(set(data.version));
      if (!version) {
        dispatch(current(data.latest));
      }
    }).catch(() => {
      alert('加载失败！！！');
    });
  }

  render() {
    const {
      current: version, versions, languages: allLanguage, status, pathname,
      handleCloseAppBar, handleRequestHome,
    } = this.props;
    const { [version]: { current: language, languages = [], summary = [] } = {} } = allLanguage;
    return (
      <AppBarDrawerComponent
        status={status}
        version={version}
        versions={versions}
        language={language}
        languages={languages}
        summary={summary}
        pathname={pathname}
        handleCloseAppBar={handleCloseAppBar}
        handleRequestHome={handleRequestHome}
        handleRequestMarkdown={this.handleRequestMarkdown}
      />
    );
  }
}

export default connect(mapStateToProps)(AppBarDrawerContainer);
