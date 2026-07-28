import { test } from '@playwright/test';

test('Right Click', async ({ page }) => {

  await page.setContent(`
    <button id="btn">Right Click</button>
  `);
await page.waitForTimeout(2000);
  await page.locator('#btn').click({
    button: 'right'
  });
  await page.waitForTimeout(2000);
});