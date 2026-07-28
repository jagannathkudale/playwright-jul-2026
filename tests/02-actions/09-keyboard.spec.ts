import { test } from '@playwright/test';

test('Keyboard Actions', async ({ page }) => {

  await page.setContent(`
    <input id="txt">
  `);

  await page.waitForTimeout(2000);
  await page.locator('#txt').fill('Playwright');
  await page.waitForTimeout(2000);
  await page.keyboard.press('Control+A');
    await page.waitForTimeout(2000);
  await page.keyboard.press('Backspace');
  await page.waitForTimeout(2000);
});