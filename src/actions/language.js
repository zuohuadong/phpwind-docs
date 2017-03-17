import { LANGUAGE_VERSION_CHANGE, LANGUAGE_VERSION_CURRENT, LANGUAGES_SUMMARY } from './types';

export const changeLanguageCurrent = (version, current) => ({
  type: LANGUAGE_VERSION_CURRENT,
  version,
  current
});

export const changeLanguages = (version, languages, current = false) => ({
  type: LANGUAGE_VERSION_CHANGE,
  version,
  current,
  languages
});

export const changeLanguagesSummary = (version, current, summary) => ({
  type: LANGUAGES_SUMMARY,
  version,
  current,
  summary
});
