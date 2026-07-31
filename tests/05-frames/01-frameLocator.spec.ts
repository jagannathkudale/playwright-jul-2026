// What is a Frame (iFrame)?

// An iFrame is a webpage inside another webpage.

import { test } from '@playwright/test';

test('Single Frame Example', async ({ page }) => {

  await page.goto('https://demoqa.com/frames');
await page.waitForTimeout(2000);
  const frame =
    page.frameLocator('#frame1');

  const text =
    await frame.locator('#sampleHeading').textContent();

  console.log(text);
 await page.waitForTimeout(2000);
});