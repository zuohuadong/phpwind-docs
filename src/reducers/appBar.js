import { APP_BAR } from '../actions/types';
import defaultState from '../actions/appBar';

export default function (state = defaultState, { type, status }) {
  if (type === APP_BAR) {
    return status;
  }

  return state;
};
