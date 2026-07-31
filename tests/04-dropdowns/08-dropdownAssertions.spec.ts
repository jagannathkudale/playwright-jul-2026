import { test, expect } from '@playwright/test';

test('Dropdown Assertion', async ({ page }) => {

  await page.setContent(`
      <select id="country">
          <option value="in">India</option>
          <option value="us">USA</option>
          <option value="jp">Japan</option>
      </select>
  `);
await page.waitForTimeout(2000);
  await page.locator('#country')
      .selectOption('jp');
await page.waitForTimeout(2000);
  await expect(
      page.locator('#country')
  ).toHaveValue('jp');
await page.waitForTimeout(2000);
});