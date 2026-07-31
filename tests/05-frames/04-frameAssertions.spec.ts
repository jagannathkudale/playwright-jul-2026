import { test, expect } from '@playwright/test';

test('Frame Assertion', async ({ page }) => {

  await page.goto('https://demoqa.com/frames');
await page.waitForTimeout(2000);
  const frame =
    page.frameLocator('#frame1');

  await expect(
    frame.locator('#sampleHeading')
  ).toHaveText('This is a sample page');
await page.waitForTimeout(2000);
});