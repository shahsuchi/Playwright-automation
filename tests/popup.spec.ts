import { test, expect, Page, chromium, firefox, webkit } from "@playwright/test"


test("popup tabs", async ({ browser }) => {

    const context = await browser.newContext();

    const parentPage: Page = await context.newPage();

    await parentPage.goto("https://testautomationpractice.blogspot.com/");

    const [childPage] = await Promise.all([parentPage.waitForEvent('popup'), parentPage.locator("#PopUp").click()]);


    await parentPage.waitForTimeout(5000);

    const allPages = context.pages();

    console.log("no of pages: ", allPages.length);
    //  approch 1 - used when having mutiple pages
    expect(allPages.length).toBe(3);

    for (let page1 = 0; page1 < allPages.length; page1++) {
        await parentPage.waitForTimeout(5000);

        console.log(" Title of page " + page1 + ": ", await allPages[page1].title());
        console.log(" URL of page " + page1 + ": ", allPages[page1].url());
        if ((await allPages[page1].title()).includes('Playwright')) {
            await allPages[page1].locator('.getStarted_Sjon').click();
            await allPages[page1].close();

        }


    }

    console.log("no of pages: ", context.pages().length);
})