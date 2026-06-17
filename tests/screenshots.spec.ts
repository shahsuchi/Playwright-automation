import { test, expect, Locator } from "@playwright/test"

test("screenshots demo", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");

    const timestamp = Date.now();
    console.log("Taking screenshot");

    //full page screenshot
    await page.screenshot({ path: 'screenshots/' + 'homepage' + '.png', fullPage: true })

    //  element screenshot
    const logo = page.locator('img[alt="Tricentis Demo Web Shop"]');
    await logo.screenshot({ path: 'screenshots/' + 'logo' + timestamp + '.png' });

    // some portion of the page
    const featureProducts = page.locator('.product-grid');
    await featureProducts.screenshot({ path: 'screenshots/' + 'featureProducts' + timestamp + '.png' });

    console.log("Screenshot completed");
})

test.only("screenshots config demo", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");

    const timestamp = Date.now();
    console.log("Taking screenshot");

    //full page screenshot
    await page.screenshot({ path: 'screenshots/' + 'homepage' + '.png', fullPage: true })

    //  element screenshot
    const logo = page.locator('img[ss="Tricentis Demo Web Shop"]');
    expect(logo).toBeVisible();
    // await logo.screenshot({ path: 'screenshots/' + 'logo' + timestamp + '.png' });

    // some portion of the page
    const featureProducts = page.locator('.oduct-grid');
    // await featureProducts.screenshot({ path: 'screenshots/' + 'featureProducts' + timestamp + '.png' });
    expect(featureProducts).toBeVisible();

    console.log("Screenshot completed");
})