import { test, expect } from '@playwright/test';

test('Pass Test', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await expect(page).toHaveTitle(/Swag Labs/);

});

test('Fail Test', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await expect(page).toHaveTitle('Wrong Title');

});