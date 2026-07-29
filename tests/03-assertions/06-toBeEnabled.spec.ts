import { test, expect } from '@playwright/test';

test('toBeEnabled', async ({ page }) => {

  await page.setContent(`
      <button id="save">Save</button>
  `);
await page.waitForTimeout(2000);
  await expect(
      page.locator('#save')
  ).toBeEnabled();
await page.waitForTimeout(2000);
});