import { test, expect, Page, chromium, firefox, webkit } from "@playwright/test"

test('Autowaiting and forcing', async ({ page }) => {

    // add timeout of test level
    // local timeout -it will override by test specified timeout
    // test.setTimeout(50000);

    // test.slow(); // default timeout * 3 
    await page.goto("https://demowebshop.tricentis.com/");


    // test timeout = 30 seconds

    // assertions - auto wait works
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/");
    await expect(page.locator('.topic-html-content-header')).toBeVisible();

    // actions - auto wait works
    await page.locator('#small-searchterms').fill("Laptop", { force: true });
    await page.locator('.button-1.search-box-button').click({ force: true });

    // auto waiting assertion need page / locator - you must await them.
    // non retrying assertion will not follow any timeout

})