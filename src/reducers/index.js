import { combineReducers } from 'redux';
import { APP_BAR, VERSIONS, LANGUAGES, DOCS } from '../actions/types';
import appBar from './appBar';
import version from './version';
import language from './language';
import docs from './docs';

const reducer = {
  [APP_BAR]: appBar,
  [VERSIONS]: version,
  [LANGUAGES]: language,
  [DOCS]: docs,
};

export default combineReducers(reducer);
