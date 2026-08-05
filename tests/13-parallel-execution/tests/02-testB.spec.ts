import { test } from '@playwright/test';

test('Test B', async () => {

  console.log('Start B');

  await new Promise(r => setTimeout(r, 5000));

  console.log('End B');

});