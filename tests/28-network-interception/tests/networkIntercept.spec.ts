import { test } from '@playwright/test';

test(
  'Capture API Response',
  async ({ page }) => {

    page.on(
      'response',
      async response => {

        if (
          response.url().includes('users')
        ) {

          console.log(
            'API URL:',
            response.url()
          );

          console.log(
            'Status:',
            response.status()
          );

        }

      }
    );

    await page.goto(
      'https://jsonplaceholder.typicode.com/users'
    );

  }
);