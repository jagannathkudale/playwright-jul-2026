import { test, expect } from '@playwright/test';

test('PUT Request Example', async ({ request }) => {

  const response = await request.put(
    'https://jsonplaceholder.typicode.com/posts/1',
    {
      data: {
        id: 1,
        title: 'Updated Title',
        body: 'Updated Body',
        userId: 1
      }
    }
  );

  const body = await response.json();

  console.log(body);

  expect(response.status()).toBe(200);

});