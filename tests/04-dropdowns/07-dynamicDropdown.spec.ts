import { test } from '@playwright/test';

test('Dynamic Dropdown Demo', async ({ page }) => {

  await page.goto('https://www.google.com');

  await page.getByRole('combobox', { name: 'Search' })
    .fill('playwright');
await page.waitForTimeout(2000);
  await page.waitForSelector('ul[role="listbox"]');

  const suggestions =
    page.locator('ul[role="listbox"] li');

  const count = await suggestions.count();

  console.log('Suggestions Count:', count);
await page.waitForTimeout(2000);
  
  for (let i = 0; i < count; i++) {

    const text =
      await suggestions.nth(i).textContent();

    console.log(text);
  }
  await page.waitForTimeout(2000);

});