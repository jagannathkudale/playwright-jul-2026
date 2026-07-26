import { test } from '@playwright/test';

test('XPath Example', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('//input[@id="user-name"]')
    .fill('standard_user');

  await page.locator('//input[@id="password"]')
    .fill('secret_sauce');

  await page.locator('//input[@id="login-button"]')
    .click();

  await page.waitForTimeout(3000);
});