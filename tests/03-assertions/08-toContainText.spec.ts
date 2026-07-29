import { test, expect } from '@playwright/test';

test('toContainText', async ({ page }) => {

  await page.setContent(`
      <h1 id="msg">Welcome Jagannath</h1>
  `);
await page.waitForTimeout(2000);
  await expect(
      page.locator('#msg')
  ).toContainText('Jagannath');
await page.waitForTimeout(2000);
});