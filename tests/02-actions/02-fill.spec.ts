import { test } from '@playwright/test';

test('Fill Action', async ({ page }) => {

  await page.setContent(`
    <input id="username">
  `);

  await page.locator('#username').fill('Jagannath');
  await page.waitForTimeout(2000);
});