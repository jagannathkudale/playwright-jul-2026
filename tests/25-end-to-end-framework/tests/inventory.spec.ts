import { test }
from '@playwright/test';

import environment
from '../config/environment';

import { LoginPage }
from '../pages/LoginPage';

import { InventoryPage }
from '../pages/InventoryPage';

test(
  'Inventory Test',
  async ({ page }) => {

    const loginPage =
      new LoginPage(page);

    const inventoryPage =
      new InventoryPage(page);

    await page.goto(
      environment.baseUrl
    );

    await loginPage.login(
      'standard_user',
      'secret_sauce'
    );

    await inventoryPage
      .verifyInventoryPage();

    await inventoryPage
      .addBackpackToCart();

  }
);