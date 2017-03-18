import { LANGUAGE_VERSION_CHANGE, LANGUAGE_VERSION_CURRENT, LANGUAGES_SUMMARY } from '../actions/types';

const defaultState = {};

export default function (state = defaultState, { type, version, languages, current, summary }) {

  const { [version]: data } = state;

  switch (type) {
    case LANGUAGE_VERSION_CURRENT:
      return {
        ...state,
        [version]: {
          ...data,
          current,
        }
      };

    case LANGUAGE_VERSION_CHANGE:
      return {
        ...state,
        [version]: {
          ...data,
          ...(current === false ? {} : { current }),
          languages
        }
      };

    case LANGUAGES_SUMMARY:
      return {
        ...state,
        [version]: {
          ...data,
          [current]: summary
        }
      };

    default:
      return state;
  }
};
