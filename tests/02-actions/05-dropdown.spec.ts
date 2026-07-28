import { test } from '@playwright/test';
test('Dropdown', async ({ page }) => {

  await page.setContent(`
    <select id="country">
      <option value="india">India</option>
      <option value="usa">USA</option>
    </select>
  `);
  await page.waitForTimeout(2000);
  await page.locator('#country').selectOption('india');
  await page.waitForTimeout(2000);
});