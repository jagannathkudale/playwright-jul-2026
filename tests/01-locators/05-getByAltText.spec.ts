import { test, expect } from '@playwright/test';

test('getByAltText Example', async ({ page }) => {

    await page.setContent(`
        <img src="sample.jpg" alt="Company Logo">
    `);

    const image = page.getByAltText('Company Logo');

    await expect(image).toBeVisible();

    await page.waitForTimeout(5000);
});