import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  firstName = '#first-name';
  lastName = '#last-name';
  postalCode = '#postal-code';
  continueBtn = '#continue';
  finishBtn = '#finish';

  async enterDetails(
    first: string,
    last: string,
    zip: string
  ) {

    await this.page.fill(this.firstName, first);

    await this.page.fill(this.lastName, last);

    await this.page.fill(this.postalCode, zip);
  }

  async continueCheckout() {
    await this.page.click(this.continueBtn);
  }

  async finishOrder() {
    await this.page.click(this.finishBtn);
  }
}