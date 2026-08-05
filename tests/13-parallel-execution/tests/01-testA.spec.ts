import { test } from '@playwright/test';

test('Test A', async () => {

  console.log('Start A');

  await new Promise(r => setTimeout(r, 5000));

  console.log('End A');

});