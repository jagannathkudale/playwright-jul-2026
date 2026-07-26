import { test } from '@playwright/test';

test('CSS Example', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('#user-name')
    .fill('standard_user');

  await page.locator('[name="password"]')
    .fill('secret_sauce');

  await page.locator('.submit-button')
    .click();

  await page.waitForTimeout(3000);
});