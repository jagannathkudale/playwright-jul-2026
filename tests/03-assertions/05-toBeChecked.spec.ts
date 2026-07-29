import { test, expect } from '@playwright/test';

test('toBeChecked', async ({ page }) => {

  await page.setContent(`
      <label>Check Box </label>

      <input type="checkbox" checked id="java">
  `);
await page.waitForTimeout(2000);
  await expect(
      page.locator('#java')
  ).toBeChecked();
await page.waitForTimeout(2000);
});