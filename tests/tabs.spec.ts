import { test, expect, Page, chromium, firefox, webkit } from "@playwright/test"


test("handle tabs", async () => {

    const browser = await chromium.launch();

    const context = await browser.newContext();

    const parentPage: Page = await context.newPage();

    await parentPage.goto("https://testautomationpractice.blogspot.com/");

    // returns a promise - pending , rejected , fullfilled
    // promise . all will wait till both the promise got completed
    // these 2 statement should go parallely

    const [childPage] = await Promise.all([context.waitForEvent('page'), parentPage.locator("button:has-text('New Tab')").click()]);


    await parentPage.waitForTimeout(5000);

    // switch between pages and get title

    const pagesNo = context.pages();

    console.log("no of pages: ", pagesNo.length);
    //  approch 1 - used when having mutiple pages
    console.log("title of pagesNo[0]", await pagesNo[0].title());
    console.log("title of pagesNo[1]", await pagesNo[1].title());
    //  approch 2 - used when have limited pages
    console.log("title of parentPage", await parentPage.title());
    console.log("title of childPage", await childPage.title());

})