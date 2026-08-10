import { Page } from '@playwright/test';

export class ScreenshotUtils {

  static async capture(page: Page, name: string) {

    await page.screenshot({
      path: `screenshots/${name}.png`,
      fullPage: true
    });

  }

}