// import { test } from '@playwright/test';

// test('Test C', async () => {

//   console.log('Running Test C');

// });

import { test } from '@playwright/test';

test('Test C', async () => {

  console.log('Start C');

  await new Promise(r => setTimeout(r, 5000));

  console.log('End C');

});