import { test } from '@playwright/test';

test('File Upload', async ({ page }) => {

  await page.setContent(`
      <input type="file" id="upload">
  `);

  await page.locator('#upload')
    .setInputFiles('tests/resource/sample.txt');

  await page.waitForTimeout(3000);

});