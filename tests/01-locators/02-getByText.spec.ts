import { test } from '@playwright/test';

test('getByText Example', async ({ page }) => {

    await page.goto('https://playwright.dev');
  await page.waitForTimeout(3000);

    await page.getByText('Get started').click();
    await page.waitForTimeout(3000);

});