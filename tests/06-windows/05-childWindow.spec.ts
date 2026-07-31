import { test, expect } from '@playwright/test';

test('Parent Child Window', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/windows');

  console.log('Parent URL:', page.url());
await page.waitForTimeout(2000);
  const [childPage] = await Promise.all([
    page.context().waitForEvent('page'),
    page.getByRole('link', { name: 'Click Here' }).click()
  ]);

  await childPage.waitForLoadState();

  console.log('Child URL:', childPage.url());

  await expect(childPage.getByRole('heading')).toHaveText('New Window');

  await page.bringToFront();
await page.waitForTimeout(2000);
  console.log('Back to Parent');

});