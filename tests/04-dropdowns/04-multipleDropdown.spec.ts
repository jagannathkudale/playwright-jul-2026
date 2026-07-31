import { test } from '@playwright/test';

test('Multiple Dropdown', async ({ page }) => {

  await page.setContent(`
      <select id="skills" multiple>
          <option value="java">Java</option>
          <option value="python">Python</option>
          <option value="playwright">Playwright</option>
      </select>
  `);
await page.waitForTimeout(2000);
  await page.locator('#skills')
      .selectOption(['java', 'playwright']);
await page.waitForTimeout(2000);
});