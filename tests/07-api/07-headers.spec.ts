import { test } from '@playwright/test';

test('Verify Response Headers', async ({ request }) => {

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  const headers = response.headers();

  console.log(headers);

});