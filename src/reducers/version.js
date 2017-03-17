import { VERSION_CURRENT, VERSION_SET } from '../actions/types';

const defaultState = {
  current: '',
  versions: []
};

export default function (state = defaultState, { type, versions, version }) {
  switch (type) {
    case VERSION_CURRENT:
      return {
        ...state,
        current: version
      };

    case VERSION_SET:
      return {
        ...state,
        versions
      };

    default:
      return state;
  }
};
