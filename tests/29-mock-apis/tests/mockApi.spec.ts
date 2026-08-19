import { test } from '@playwright/test';

import mockUser
from '../test-data/mockUser.json';

test(
  'Mock API Response',
  async ({ page }) => {

    await page.route(
      '**/users/1',
      async route => {

        await route.fulfill({
          status: 200,
          contentType: 'application/json',

          body: JSON.stringify(
            mockUser
          )

        });

      }
    );

    page.on(
      'response',
      async response => {

        if (
          response.url().includes('/users/1')
        ) {

          const data =
            await response.json();

          console.log(data);

        }

      }
    );

    await page.goto(
      'https://jsonplaceholder.typicode.com/users/1'
    );

  }
);