import { test } from '@playwright/test';

test('Click Action', async ({ page }) => {

  await page.setContent(`
    <button id="login">Login</button>
  `);

  await page.locator('#login').click();
  await page.waitForTimeout(2000);
});