import { test, expect, Locator } from "@playwright/test"

test("flaky demo", async ({ page, context }) => {
    // npx playwright test tests/flaky.spec.ts --retries=3

    await page.goto("https://demowebshop.tricentis.com/");

    const timestamp = Date.now();
    console.log("Taking screenshot");

    //  element screenshot
    const logo = page.locator('img[alt="Tricentis Demo Web Shop"]');
    expect(logo).toBeVisible();

    // some portion of the page
    const featureProducts = page.locator('.product-grid2');
    expect(featureProducts).toBeVisible();

})
