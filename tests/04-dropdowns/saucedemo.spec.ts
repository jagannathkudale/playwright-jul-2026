import { test } from '@playwright/test';

test('Sort Products', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');
await page.waitForTimeout(2000);
  await page.locator('#user-name')
      .fill('standard_user');

  await page.locator('#password')
      .fill('secret_sauce');

  await page.locator('#login-button')
      .click();

  await page.locator(
      '.product_sort_container'
  ).selectOption('za');
await page.waitForTimeout(2000);
});