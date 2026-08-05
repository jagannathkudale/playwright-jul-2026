import { test } from '@playwright/test';

test.describe.configure({
  mode: 'serial'
});

test('Step 1', async () => {

  console.log('Step 1');

});

test('Step 2', async () => {

  console.log('Step 2');

});

test('Step 3', async () => {

  console.log('Step 3');

});