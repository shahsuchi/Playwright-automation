/* 
test1 - sanity
test2 - sanity , regression 
test3 - regression 
npx playwright test tests/tagging.spec.ts  --headed --grep "@sanity"

(?=.*@sanity)
(?=.*@regression)
npx playwright test tests/tagging.spec.ts  --headed --grep "(?=.*@sanity) (?=.*@regression)" -- both tag wil run
npx playwright test tests/tagging.spec.ts  --headed --grep "@sanity | @regression" -- either santity or regression will run

run sanity whihc is not belongs to regression
npx playwright test tests/tagging.spec.ts  --headed --grep "@sanity" --grep-invert"@regression"
*/
import { test, expect, Locator } from "@playwright/test"

test("@sanity check the title of the home page", async ({ page }) => {
    await page.goto("https://google.com");
    await expect(page).toHaveTitle('Google');
})



test("1sanity check the title of the home page", { tag: '@sanity' }, async ({ page }) => {
    await page.goto("https://google.com");
    await expect(page).toHaveTitle('Google');
})

test("2regression check the title of the home page", { tag: '@regression' }, async ({ page }) => {
    await page.goto("https://google.com");
    await expect(page).toHaveTitle('Google');
})

test("3regression check the title of the home page", { tag: ['@regression', '@sanity'] }, async ({ page }) => {
    await page.goto("https://google.com");
    await expect(page).toHaveTitle('Google');
})