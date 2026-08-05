import { test, expect } from '@playwright/test';

test('GET Request', async ({ request }) => {

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  console.log(response.status());

  const body = await response.json();

  console.log(body);

});