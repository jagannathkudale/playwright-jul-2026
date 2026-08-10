import { Page } from '@playwright/test';

export class CommonFunctions {

  static async click(
    page: Page,
    locator: string
  ) {
    await page.locator(locator).click();
  }

  static async enterText(
    page: Page,
    locator: string,
    text: string
  ) {
    await page.locator(locator).fill(text);
  }

  static async getTitle(
    page: Page
  ) {
    return await page.title();
  }

  static async takeScreenshot(
    page: Page,
    fileName: string
  ) {
    await page.screenshot({
      path: `screenshots/${fileName}.png`,
      fullPage: true
    });
  }

}