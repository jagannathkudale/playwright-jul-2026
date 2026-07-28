import { test } from '@playwright/test';

test('Mouse Hover', async ({ page }) => {

  await page.setContent(`
    <label>MouseHover</label>
    <button id="menu">Products</button>
  `);
 await page.waitForTimeout(2000);
  await page.locator('#menu').hover();
  await page.waitForTimeout(2000);
});