import { test, expect } from '@playwright/test';

test('Verify Text in Child Window', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/windows');
  await page.waitForTimeout(2000);
  const [childPage] = await Promise.all([
    page.context().waitForEvent('page'),
    page.getByRole('link', { name: 'Click Here' }).click()
  ]);

  await childPage.waitForLoadState();

  await expect(
    childPage.getByRole('heading', { name: 'New Window' })
  ).toBeVisible();
await page.waitForTimeout(2000);
  await expect(
    childPage.getByRole('heading', { name: 'New Window' })
  ).toHaveText('New Window');

});