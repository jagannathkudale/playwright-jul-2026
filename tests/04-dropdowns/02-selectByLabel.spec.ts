import { test } from '@playwright/test';

test('Select By Label', async ({ page }) => {

  await page.setContent(`
      <select id="country">
          <option value="in">India</option>
          <option value="us">USA</option>
          <option value="jp">Japan</option>
      </select>
  `);
  await page.waitForTimeout(3000);
  await page.locator('#country')
      .selectOption({ label: 'Japan' });
  await page.waitForTimeout(3000);
});