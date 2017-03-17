import { DOCS } from './types';

export const changeItem = (key, doc) => ({
  type: DOCS,
  key,
  doc
});
