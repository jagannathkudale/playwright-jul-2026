import { test } from '@playwright/test';

test('getByLabel Example', async ({ page }) => {

    await page.goto('http://127.0.0.1:5500/tests/resource/sample.html');

   // http://127.0.0.1:5500/tests/resource/sample.html

    await page.getByLabel('Username').fill('Shri');
    await page.waitForTimeout(3000);
});