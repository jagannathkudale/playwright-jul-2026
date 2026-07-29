import { test, expect } from '@playwright/test';

test('toHaveValue', async ({ page }) => {

  await page.setContent(`
      <input id="name" value="Jagannath">
  `);
await page.waitForTimeout(2000);
  await expect(
      page.locator('#name')
  ).toHaveValue('Jagannath');
  await page.waitForTimeout(2000);

});