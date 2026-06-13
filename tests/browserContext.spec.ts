import { test, expect, Page, chromium, firefox, webkit } from "@playwright/test"


// browser is having context  --> pages 
// BrowserContexts provide a way to operate multiple independent browser sessions.
//contexts  - we can have multiple context for multiple users/apps for the same browser

// page - tab / window / pop up

test("browser context demo", async () => {
    // create your own browser
    const browser = await chromium.launch();
    // const browser = await firefox.launch();
    // const browser = await webkit.launch();

    const context = await browser.newContext();
    const page1: Page = await context.newPage();
    const page2: Page = await context.newPage();
    // page1
    await page1.goto("https://testautomationpractice.blogspot.com/");
    await expect(page1).toHaveTitle('Automation Testing Practice');
    //  no of pages 
    console.log("number of pages created :", context.pages().length);

    // page2
    await page2.goto("https://playwright.dev/docs/api/class-browsercontext");
    await expect(page2).toHaveTitle('BrowserContext | Playwright');

    await page1.waitForTimeout(5000);

})