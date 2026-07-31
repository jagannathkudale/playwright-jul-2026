import { test } from '@playwright/test';

test('New Window', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/windows');

  const [newWindow] = await Promise.all([
    page.context().waitForEvent('page'),
    page.getByRole('link', { name: 'Click Here' }).click()
  ]);

  await newWindow.waitForLoadState();
await page.waitForTimeout(2000);
  console.log('New Window URL:', newWindow.url());
await page.waitForTimeout(2000);
});