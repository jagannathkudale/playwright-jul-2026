import { test, expect } from '@playwright/test';

test('POST Request With Payload', async ({ request }) => {

  const payload = {
    title: 'Playwright',
    body: 'Learning API Testing',
    userId: 1
  };

  const response = await request.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      data: payload
    }
  );

  expect(response.status()).toBe(201);

  const body = await response.json();

  console.log(body);

});