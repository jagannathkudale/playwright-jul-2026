import { test } from '@playwright/test';

import { WaitUtils } from '../../17-full-framework/utils/WaitUtils';
import { ScreenshotUtils } from '../../17-full-framework/utils/ScreenshotUtils';
import { RandomDataUtils } from '../../17-full-framework/utils/RandomDataUtils';
import { DateUtils } from '../../17-full-framework/utils/DateUtils';

test('Utility Demo', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await WaitUtils.wait(page, 2);

  console.log(
    RandomDataUtils.getRandomEmail()
  );

  console.log(
    DateUtils.getCurrentDate()
  );

  await ScreenshotUtils.capture(
    page,
    'utility-demo'
  );

});