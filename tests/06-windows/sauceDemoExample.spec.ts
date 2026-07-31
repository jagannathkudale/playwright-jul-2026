import { test, expect } from '@playwright/test';

test('SauceDemo Child Window', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.waitForTimeout(2000);
  await page.locator('#login-button').click();
await page.waitForTimeout(2000);
  const [childPage] = await Promise.all([
    page.context().waitForEvent('page'),
    page.locator('[data-test="social-twitter"]').click()
  ]);

  await childPage.waitForLoadState();

  console.log('Child Title:', await childPage.title());

});