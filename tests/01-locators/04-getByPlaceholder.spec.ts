import { test } from '@playwright/test';

test('getByPlaceholder Example', async ({ page }) => {

    await page.goto('https://demoqa.com/text-box');

    await page.getByPlaceholder('Full Name').fill('Jagannath');

    await page.waitForTimeout(3000);
});