/*import { test, expect } from '@playwright/test';

test('getByTitle Example', async ({ page }) => {

  await page.setContent(`
      <button title="Login Button">Login</button>
  `);

  await page.getByTitle('Login Button').click();
await page.waitForTimeout(3000);
});
*/

import { test } from '@playwright/test';

test('Title Locator Demo', async ({ page }) => {

  await page.setContent(`
      <input title="Username Field">
  `);

  await page.getByTitle('Username Field')
    .fill('Jagannath');
await page.waitForTimeout(2000);
});