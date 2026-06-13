import { test, expect, Page, chromium, firefox, webkit } from "@playwright/test"


test("Authneticated popup tabs", async ({ browser }) => {

    const context = await browser.newContext({ httpCredentials: { username: 'admin', password: 'admin' } });

    const parentPage: Page = await context.newPage();
    // 

    // await parentPage.goto("https://the-internet.herokuapp.com/basic_auth");
    // await parentPage.goto("https://username:password@the-internet.herokuapp.com/basic_auth");

    // // approach1 - pass username and password in url
    // await parentPage.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");

    // await parentPage.waitForLoadState(); // wait for page to load

    // await parentPage.waitForTimeout(5000);

    // await expect(parentPage.locator('.example p')).toBeVisible();
    // console.log(" sucees message :", await parentPage.locator('.example p').innerText());

    // approach2 - use browser context 
    await parentPage.goto("https://the-internet.herokuapp.com/basic_auth");
    await parentPage.waitForLoadState(); // wait for page to load

    await parentPage.waitForTimeout(5000);

    await expect(parentPage.locator('.example p')).toBeVisible();
    console.log(" sucees message :", await parentPage.locator('.example p').innerText());


})