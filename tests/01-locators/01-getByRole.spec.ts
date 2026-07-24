import { test } from '@playwright/test';

test('getByRole Example', async ({ page }) => {

    await page.goto('https://www.google.com');

    await page.getByRole('combobox').fill('Playwright');
    await page.waitForTimeout(3000);

});