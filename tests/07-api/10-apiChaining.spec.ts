import { test, expect } from '@playwright/test';

test('API Chaining Example', async ({ request }) => {

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  console.log('Post ID:', body.id);
  console.log('Title:', body.title);

  expect(body.id).toBe(1);

});