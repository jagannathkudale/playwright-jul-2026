import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test('Verify Cart Count', async ({ page }) => {

  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.navigate('https://www.saucedemo.com/');

  await login.login(
    'standard_user',
    'secret_sauce'
  );

  await inventory.addBackpack();

  await inventory.openCart();

  await expect(
    page.locator('.inventory_item_name')
  ).toContainText('Sauce Labs Backpack');

});