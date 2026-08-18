import { Page } from '@playwright/test';

export class CommonFunctions {

  static async takeScreenshot(
    page: Page,
    name: string
  ) {

    await page.screenshot({
      path:
        `screenshots/${name}.png`
    });

  }

}