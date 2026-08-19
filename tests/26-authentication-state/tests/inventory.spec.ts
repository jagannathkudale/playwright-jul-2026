import { test, expect } from '@playwright/test';

test.use({
  storageState:
    'tests/26-authentication-state/auth/user.json'
});

test(
  'Inventory Page Without Login',
  async ({ page }) => {

    await page.goto(
      'https://www.saucedemo.com/inventory.html'
    );

    await expect(page)
      .toHaveURL(/inventory/);

    console.log(
      'User already logged in using saved session'
    );

  }
);