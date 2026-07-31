import { test } from '@playwright/test';

test('Multiple Tabs', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/windows');
  await page.waitForTimeout(2000);
  const [tab1] = await Promise.all([
    page.context().waitForEvent('page'),
    page.getByRole('link', { name: 'Click Here' }).click()
  ]);

  await tab1.waitForLoadState();

  console.log('Parent Title:', await page.title());
  console.log('Child Title:', await tab1.title());
await page.waitForTimeout(2000);
});