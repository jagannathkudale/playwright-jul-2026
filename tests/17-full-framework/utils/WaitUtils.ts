import { Page } from '@playwright/test';

export class WaitUtils {

  static async wait(page: Page, seconds: number) {
    await page.waitForTimeout(seconds * 1000);
  }

}