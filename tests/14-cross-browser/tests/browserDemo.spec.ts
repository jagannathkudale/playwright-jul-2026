import { test, expect } from '@playwright/test';

test('Cross Browser Demo', async ({ page, browserName }) => {

  console.log('Running on:', browserName);

  await page.goto('https://www.saucedemo.com/');

  await expect(page).toHaveTitle(/Swag Labs/);

});