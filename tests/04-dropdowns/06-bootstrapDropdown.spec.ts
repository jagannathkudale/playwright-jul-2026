import { test } from '@playwright/test';

test('Bootstrap Dropdown', async ({ page }) => {

  await page.goto('https://demoqa.com/select-menu');
await page.waitForTimeout(2000);
  await page.locator('#withOptGroup').click();
await page.waitForTimeout(2000);
  await page.getByText('Group 1, option 1').click();
await page.waitForTimeout(2000);
});