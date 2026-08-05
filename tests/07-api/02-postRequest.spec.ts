import { test, expect } from '@playwright/test';

test('POST Request Example', async ({ request }) => {

  const response = await request.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      data: {
        title: 'Playwright',
        body: 'API Testing',
        userId: 1
      }
    }
  );

  const body = await response.json();

  console.log(body);

  expect(response.status()).toBe(201);

});