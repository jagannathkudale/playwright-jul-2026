import { test as setup } from '@playwright/test';

setup(
  'Login and Save Authentication State',
  async ({ page }) => {

    await page.goto(
      'https://www.saucedemo.com/'
    );

    await page.fill(
      '#user-name',
      'standard_user'
    );

    await page.fill(
      '#password',
      'secret_sauce'
    );

    await page.click(
      '#login-button'
    );

    await page.context().storageState({
      path:
        'tests/26-authentication-state/auth/user.json'
    });

  }
);