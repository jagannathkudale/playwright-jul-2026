import { test }
from '@playwright/test';

import environment
from '../config/environment';

import { LoginPage }
from '../pages/LoginPage';

test(
  'Framework Login Test',
  async ({ page }) => {

    const loginPage =
      new LoginPage(page);

    await page.goto(
      environment.baseUrl
    );

    await loginPage.login(
      'standard_user',
      'secret_sauce'
    );

  }
);