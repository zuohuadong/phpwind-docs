import { APP_BAR } from './types';

export const close = {
  type: APP_BAR,
  status: false,
};

export const open = {
  type: APP_BAR,
  status: true,
};

// default status.
export default false;
