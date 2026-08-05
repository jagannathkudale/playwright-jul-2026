import { test, expect }
from '@playwright/test';

import { LoginPage }
from '../pages/LoginPage';

import { InventoryPage }
from '../pages/InventoryPage';

import { CartPage }
from '../pages/CartPage';

import { CheckoutPage }
from '../pages/CheckoutPage';

test('Complete Checkout',
async ({ page }) => {

  const login =
    new LoginPage(page);

  const inventory =
    new InventoryPage(page);

  const cart =
    new CartPage(page);

  const checkout =
    new CheckoutPage(page);

  await login.navigate(
    'https://www.saucedemo.com/'
  );

  await login.login(
    'standard_user',
    'secret_sauce'
  );

  await inventory.addBackpack();

  await inventory.openCart();

  await cart.checkout();

  await checkout.enterDetails(
    'Jagannath',
    'Kudale',
    '411028'
  );

  await checkout.continueCheckout();

  await checkout.finishOrder();

  await expect(page.locator(
    '.complete-header'
  )).toHaveText(
    'Thank you for your order!'
  );

});