import { test } from '@playwright/test';

test('Handle New Tab', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/windows');
await page.waitForTimeout(2000);
  const [newPage] = await Promise.all([
    page.context().waitForEvent('page'),
    page.getByRole('link', { name: 'Click Here' }).click()
  ]);
await page.waitForTimeout(2000);
  await newPage.waitForLoadState();

  console.log(await newPage.title());
await page.waitForTimeout(2000);
});