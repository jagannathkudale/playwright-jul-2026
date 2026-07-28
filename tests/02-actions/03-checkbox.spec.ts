import { test } from '@playwright/test';

test('Checkbox', async ({ page }) => {

  await page.setContent(`
    <input type="checkbox" id="java">
  `);
 await page.waitForTimeout(2000);
  await page.locator('#java').check();
 await page.waitForTimeout(2000);

  await page.setContent(`
    <input type="checkbox" id="java" checked>java
  `);
await page.waitForTimeout(2000);
  await page.locator('#java').uncheck();
await page.waitForTimeout(2000);
});