import { test, expect } from '@playwright/test';

test(
  'API + UI Hybrid Example',
  async ({ page, request }) => {

    // API Call
    const response =
      await request.get(
        'https://jsonplaceholder.typicode.com/users/1'
      );

    expect(
      response.ok()
    ).toBeTruthy();

    const user =
      await response.json();

    console.log(
      'User Name:',
      user.name
    );

    // UI Verification
    await page.goto(
      'https://jsonplaceholder.typicode.com/users/1'
    );

    await expect(page)
      .toHaveURL(
        /users\/1/
      );

  }
);