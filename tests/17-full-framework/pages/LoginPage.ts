import { Page } from '@playwright/test';
import { CONFIG } from '../config/environment';

export class LoginPage {

  constructor(private page: Page) {}

  async openApplication() {
    await this.page.goto(CONFIG.URL);
  }

  async login(user: string, pass: string) {

    await this.page.fill('#user-name', user);

    await this.page.fill('#password', pass);

    await this.page.click('#login-button');

  }

}