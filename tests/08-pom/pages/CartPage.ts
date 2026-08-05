import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  checkoutBtn = '#checkout';

  async checkout() {
    await this.page.click(this.checkoutBtn);
  }
}