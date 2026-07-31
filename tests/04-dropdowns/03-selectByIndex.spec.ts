import { test } from '@playwright/test';

test('Select By Index', async ({ page }) => {

  await page.setContent(`
      <select id="country">
          <option>India</option>
          <option>USA</option>
          <option>Japan</option>
      </select>
  `);
await page.waitForTimeout(2000);
  await page.locator('#country')
      .selectOption({ index: 1 });
await page.waitForTimeout(2000);
});