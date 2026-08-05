import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test('Add Product To Cart', async ({ page }) => {

  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.navigate('https://www.saucedemo.com/');

  await login.login(
    'standard_user',
    'secret_sauce'
  );

  await inventory.addBackpack();

  await expect(
    page.locator('.shopping_cart_badge')
  ).toHaveText('1');

});