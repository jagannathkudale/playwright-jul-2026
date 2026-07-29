import { test, expect } from '@playwright/test';

test('toHaveTitle', async ({ page }) => {

  await page.goto('https://playwright.dev');
await page.waitForTimeout(2000);
  await expect(page)
      .toHaveTitle(/Playwright/);
      await page.waitForTimeout(2000);

});