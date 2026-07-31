import { test } from '@playwright/test';

test('Nested Frames', async ({ page }) => {

  await page.goto(
    'https://the-internet.herokuapp.com/nested_frames'
  );
await page.waitForTimeout(2000);
  const topFrame =
    page.frameLocator('[name="frame-top"]');

  const middleFrame =
    topFrame.frameLocator('[name="frame-middle"]');

  const text =
    await middleFrame.locator('#content').textContent();

  console.log(text);
await page.waitForTimeout(2000);
});