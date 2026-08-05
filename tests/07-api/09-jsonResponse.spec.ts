import { test } from '@playwright/test';

test('Read JSON Response', async ({ request }) => {

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  const body = await response.json();

  console.log('User ID:', body.userId);
  console.log('ID:', body.id);
  console.log('Title:', body.title);
  console.log('Body:', body.body);

});