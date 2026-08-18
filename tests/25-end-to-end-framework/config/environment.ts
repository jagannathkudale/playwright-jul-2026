import dev from './dev';
import qa from './qa';
import uat from './uat';

const env = process.env.TEST_ENV;

export default
env === 'qa'
  ? qa
  : env === 'uat'
  ? uat
  : dev;