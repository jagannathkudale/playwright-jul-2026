import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {

  console.log('Before Each');

  await page.goto('https://www.saucedemo.com/');

});

test.afterEach(async () => {

  console.log('After Each');

});

test('Test 1', async ({ page }) => {

  await expect(page).toHaveTitle(/Swag Labs/);

});

test('Test 2', async ({ page }) => {

  await expect(page.locator('.login_logo'))
    .toBeVisible();

});