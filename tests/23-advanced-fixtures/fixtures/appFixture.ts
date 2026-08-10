import { test as base } from '@playwright/test';
import { LoginPage } from '../../17-full-framework/pages/LoginPage';
import { InventoryPage } from '../../17-full-framework/pages/InventoryPage';

type MyFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
};

export const test = base.extend<MyFixtures>({

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  }

});

export { expect } from '@playwright/test';