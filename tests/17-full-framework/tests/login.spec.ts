import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CONFIG } from '../config/environment';

test('Login and Add Product', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.openApplication();

  await loginPage.login(
    CONFIG.USERNAME,
    CONFIG.PASSWORD
  );

  await inventoryPage.verifyInventoryPage();

  await inventoryPage.addBackpackToCart();

  await inventoryPage.openCart();

});