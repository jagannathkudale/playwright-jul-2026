import { test, expect }
from '../fixtures/baseTest';

test(
  'Base Framework Login',
  async ({
    loginPage,
    inventoryPage,
    page
  }) => {

    await loginPage.openApplication();

    await loginPage.login(
      'standard_user',
      'secret_sauce'
    );

    await inventoryPage.verifyInventoryPage();

    await expect(page)
      .toHaveURL(/inventory/);

  }
);