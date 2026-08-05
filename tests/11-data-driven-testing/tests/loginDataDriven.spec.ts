import { test, expect } from '@playwright/test';
import data from '../test-data/loginData.json';

test('Login Using JSON Data', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.waitForTimeout(2000);
  await page.fill('#user-name', data.validUser.username);

  await page.fill('#password', data.validUser.password);

  await page.click('#login-button');
await page.waitForTimeout(2000);
  await expect(page).toHaveURL(/inventory/);

});