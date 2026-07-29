import { test, expect } from '@playwright/test';

test('toBeVisible', async ({ page }) => {

  await page.setContent(`
      <button id="login">Login</button>
  `);
await page.waitForTimeout(2000);
  await expect(
      page.locator('#login')
  ).toBeVisible();
  await page.waitForTimeout(2000);

});