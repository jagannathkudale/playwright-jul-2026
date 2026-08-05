import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  backpack =
    '#add-to-cart-sauce-labs-backpack';

  bikeLight =
    '#add-to-cart-sauce-labs-bike-light';

  cart =
    '.shopping_cart_link';

  sort =
    '.product_sort_container';

  async addBackpack() {
    await this.page.click(this.backpack);
  }

  async addBikeLight() {
    await this.page.click(this.bikeLight);
  }

  async openCart() {
    await this.page.click(this.cart);
  }

  async sortAZ() {
    await this.page.selectOption(this.sort, 'az');
  }

  async sortZA() {
    await this.page.selectOption(this.sort, 'za');
  }
}