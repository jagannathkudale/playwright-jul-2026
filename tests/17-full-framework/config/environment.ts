import { ENV as DEV } from './dev';
import { ENV as QA } from './qa';
import { ENV as UAT } from './uat';

const env = process.env.TEST_ENV || 'dev';

export const CONFIG =
  env === 'qa'
    ? QA
    : env === 'uat'
    ? UAT
    : DEV;