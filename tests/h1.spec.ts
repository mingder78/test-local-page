import { test, expect } from '@playwright/test';

test('test local server page', async ({ request }) => {
  const res = await request.get('/');
  expect(res.status()).toBe(200);
});

