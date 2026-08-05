import { test, expect } from '@playwright/test';

test('DELETE Request Example', async ({ request }) => {

  const response = await request.delete(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  console.log('Status Code:', response.status());

  expect(response.status()).toBe(200);

});