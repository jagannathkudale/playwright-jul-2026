import { test } from '@playwright/test';

test('Radio Button', async ({ page }) => {

  await page.setContent(`
    <label>radio</label>
    <input type="radio" name="gender" value="male">
    
  `);
  
await page.waitForTimeout(2000);
  await page.locator('[value="male"]').check();
  await page.waitForTimeout(2000);
});