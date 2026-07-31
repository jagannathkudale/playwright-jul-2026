import { test } from '@playwright/test';

test('Multiple Frames', async ({ page }) => {

  await page.goto('https://demoqa.com/frames');

  const frame1 =
    page.frameLocator('#frame1');

  const frame2 =
    page.frameLocator('#frame2');

  const text1 =
    await frame1.locator('#sampleHeading').textContent();

  const text2 =
    await frame2.locator('#sampleHeading').textContent();
await page.waitForTimeout(2000);
  console.log(text1);
  console.log(text2);
await page.waitForTimeout(2000);
});