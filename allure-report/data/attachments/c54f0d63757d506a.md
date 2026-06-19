# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: reporters.spec.ts >> verify products
- Location: tests\reporters.spec.ts:17:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('.product-grid2')
Expected: visible
Received: undefined

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.product-grid2')

```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | //npx playwright test tests/reporters.spec.ts --reporter=html --headed
  4  | //npm install -D allure-playwright
  5  | 
  6  | test.beforeEach('launchi app', async ({ page }) => {
  7  |     await page.goto("https://demowebshop.tricentis.com/");
  8  | })
  9  | 
  10 | test("verify logo", async ({ page }) => {
  11 | 
  12 |     const logo = page.locator('img[alt="Tricentis Demo Web Shop"]');
  13 |     expect(logo).toBeVisible();
  14 | })
  15 | 
  16 | 
  17 | test("verify products", async ({ page }) => {// some portion of the page
  18 | 
  19 |     const featureProducts = page.locator('.product-grid2');
> 20 |     expect(featureProducts).toBeVisible();
     |                             ^ Error: expect(locator).toBeVisible() failed
  21 | })
  22 | 
  23 | 
  24 | test("verify title", async ({ page }) => {// some portion of the page
  25 | 
  26 |     page.title().then((title) => {
  27 |         expect(title).toBe("Tricentis Demo Web Shop");
  28 |     })
  29 | })
  30 | 
```