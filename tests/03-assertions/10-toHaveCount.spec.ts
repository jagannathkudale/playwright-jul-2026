import { test, expect } from '@playwright/test';

test('toHaveCount', async ({ page }) => {

  await page.setContent(`
      <ul>
          <li>Java</li>
          <li>Python</li>
          <li>Playwright</li>
      </ul>
  `);
await page.waitForTimeout(2000);
  await expect(
      page.locator('li')
  ).toHaveCount(3);
  await page.waitForTimeout(2000);

});