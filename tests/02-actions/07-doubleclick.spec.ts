import { test } from '@playwright/test';

test('Double Click', async ({ page }) => {

  await page.setContent(`
    <label>Double Click</label>
    <button id="btn">Double Click</button>
  `);
  await page.waitForTimeout(2000);

  await page.locator('#btn').dblclick();
  await page.waitForTimeout(2000);
});