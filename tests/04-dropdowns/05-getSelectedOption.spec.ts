import { test } from '@playwright/test';

test('Get Selected Option', async ({ page }) => {

  await page.setContent(`
      <select id="country">
          <option value="in">India</option>
          <option value="us">USA</option>
      </select>
  `);
await page.waitForTimeout(2000);
  await page.locator('#country')
      .selectOption('us');

  const value =
      await page.locator('#country').inputValue();

  console.log(value);
await page.waitForTimeout(2000);
});