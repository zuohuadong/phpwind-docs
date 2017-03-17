import { VERSION_CURRENT, VERSION_SET } from './types';

export const current = (version) => ({
  type: VERSION_CURRENT,
  version
});

export const set = (versions) => ({
  type: VERSION_SET,
  versions
});
