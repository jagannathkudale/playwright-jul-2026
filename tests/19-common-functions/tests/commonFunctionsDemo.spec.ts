import { test } from '@playwright/test';

import { CommonFunctions }
from '../../17-full-framework/utils/CommonFunctions';

test('Common Functions Demo', async ({ page }) => {

  await page.goto(
    'https://www.saucedemo.com/'
  );

  await CommonFunctions.enterText(
    page,
    '#user-name',
    'standard_user'
  );

  await CommonFunctions.enterText(
    page,
    '#password',
    'secret_sauce'
  );

  await CommonFunctions.click(
    page,
    '#login-button'
  );

  console.log(
    await CommonFunctions.getTitle(page)
  );

  await CommonFunctions.takeScreenshot(
    page,
    'common-functions-demo'
  );

});