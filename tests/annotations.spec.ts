import { test, expect, Locator } from "@playwright/test"

/*
only
skip 
fail
*/
test("test1", async ({ page }) => {
    await page.goto("https://google.com");
    await expect(page).toHaveTitle('Google');
})

//skip
test.skip("test2", async ({ page }) => {
    await page.goto("https://google.com");
    await expect(page).toHaveTitle('Google');

})

// skip based on condition
test("test3", async ({ page, browserName }) => {
    test.skip(browserName === 'firefox', 'this is skipped if browser is firefox');
    await page.goto("https://google.com");
    await expect(page).toHaveTitle('Google');

})

// fail
test.fail("test4", async ({ page, browserName }) => {
    await page.goto("https://google.com");
    await expect(page).toHaveTitle('Google');

})

// fixme - it will skip the test - will not run
test.fixme("test5", async ({ page, browserName }) => {
    await page.goto("https://google.com");
    //no assertion
})

// slow - default is 30 , slow will become 90 , triple the default timeout
test("test6", async ({ page }) => {
    test.slow
    await page.goto("https://google.com");
    //no assertion
})