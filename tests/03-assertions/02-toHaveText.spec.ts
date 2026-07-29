import { test, expect } from '@playwright/test';

test('toHaveText', async ({ page }) => {

  await page.setContent(`
      <h1 id="msg">Welcome</h1>
  `);
await page.waitForTimeout(2000);
  await expect(
      page.locator('#msg')
  ).toHaveText('Welcome');
  await page.waitForTimeout(2000);

});