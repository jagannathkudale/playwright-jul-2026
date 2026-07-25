import { test } from '@playwright/test';

test('getByTestId Example', async ({ page }) => {

  await page.setContent(`
      <button data-testid="loginBtn">
          Login
      </button>
  `);

  await page.getByTestId('loginBtn').click();
  await page.waitForTimeout(2000);
});