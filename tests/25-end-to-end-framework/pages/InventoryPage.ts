import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {

  async verifyInventoryPage() {

    await expect(this.page)
      .toHaveURL(/inventory/);

  }

  async addBackpackToCart() {

    await this.page.click(
      '#add-to-cart-sauce-labs-backpack'
    );

  }

}