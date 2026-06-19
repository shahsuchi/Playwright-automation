import { test, expect } from "@playwright/test";

//npx playwright test tests/reporters.spec.ts --reporter=html --headed
//npm install -D allure-playwright
// npm install -g allure-commandline
//allure generate ./allure-results -o ./allure-report --clean
// allure open./ allure - report
test.beforeEach('launchi app', async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");
})

test("verify logo", async ({ page }) => {

    const logo = page.locator('img[alt="Tricentis Demo Web Shop"]');
    expect(logo).toBeVisible();
})


test("verify products", async ({ page }) => {// some portion of the page

    const featureProducts = page.locator('.product-grid2');
    expect(featureProducts).toBeVisible();
})


test("verify title", async ({ page }) => {// some portion of the page

    page.title().then((title) => {
        expect(title).toBe("Tricentis Demo Web Shop");
    })
})
