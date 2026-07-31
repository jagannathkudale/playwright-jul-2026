
// What is a Dropdown?
// A dropdown allows users to select one option from multiple options.

import { test } from '@playwright/test';

test('Select By Value', async ({ page }) => {

  await page.setContent(`
      <select id="country">
          <option value="in">India</option>
          <option value="us">USA</option>
          <option value="jp">Japan</option>
      </select>
  `);
  await page.waitForTimeout(2000);
  await page.locator('#country')
      .selectOption('us');

  await page.waitForTimeout(2000);

});