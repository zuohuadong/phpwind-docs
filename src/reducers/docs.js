import { DOCS } from '../actions/types';

export default function (state = {}, { type, key, doc }) {
  if (type === DOCS) {
    return {
      ...state,
      [key]: doc
    };
  }

  return state;
};
