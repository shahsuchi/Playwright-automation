import { test, expect, Locator } from "@playwright/test"

test("tracing demo", async ({ page, context }) => {

    //  npx playwright test --headed --trace on 

    /* 1. using command - npx playwright test tests/tracing.spec.ts --headed --trace on
    using config - from playwright.config
    through programtically
    
    to view trace file - 3 ways
    
    1. from html file - click on trace.zip
    2. npx palywright show-trace 
    3. utility https://trace.playwright.dev/ drag and drop zip file*/

    context.tracing.start({ screenshots: true, snapshots: true });



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
    context.tracing.stop({ path: 'traceeg.zip' })
})

test("screenshots config demo", async ({ page }) => {

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