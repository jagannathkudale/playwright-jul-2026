import { test, expect } from '@playwright/test';

test('toHaveURL', async ({ page }) => {

  await page.goto('https://playwright.dev');

  await page.waitForTimeout(2000);
  await expect(page)
      .toHaveURL('https://playwright.dev/');
await page.waitForTimeout(2000);
});