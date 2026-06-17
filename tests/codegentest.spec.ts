import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page.getByRole('banner')).toMatchAriaSnapshot(`
    - navigation "Site":
      - button "Main menu"
    - link "Wikipedia The Free Encyclopedia":
      - /url: /wiki/Main_Page
      - img "Wikipedia"
      - img "The Free Encyclopedia"
    `);
  await page.getByText('Showing results for kamuda').click();
});