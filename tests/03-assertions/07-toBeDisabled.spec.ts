import { test, expect } from '@playwright/test';

test('toBeDisabled', async ({ page }) => {

  await page.setContent(`
      <button disabled id="save">Save</button>
  `);
await page.waitForTimeout(2000);
  await expect(
      page.locator('#save')
  ).toBeDisabled();
await page.waitForTimeout(2000);
});