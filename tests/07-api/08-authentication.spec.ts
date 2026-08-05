import { test, expect } from '@playwright/test';

test('Authentication Example', async ({ request }) => {

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts/1',
    {
      headers: {
        Authorization: 'Bearer dummy_token'
      }
    }
  );

  console.log('Status:', response.status());

  expect(response.status()).toBe(200);

});