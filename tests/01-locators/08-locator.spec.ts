import { test } from '@playwright/test';

test('locator Example', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('#user-name')
    .fill('standard_user');

  await page.locator('#password')
    .fill('secret_sauce');

  await page.waitForTimeout(3000);
  await page.locator("#login-button").click();
  await page.waitForTimeout(3000);
});