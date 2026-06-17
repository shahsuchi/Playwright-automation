import { test, expect, Locator, Page } from "@playwright/test"

// make page as a global

let page: Page;

/*open app
 login 
 find products
 logout 
 
 login 
 add product to cart
 logout
 
 close app*/
test.beforeAll('open app', async ({ browser }) => {

    console.log("open app");
    page = await browser.newPage();
    await page.goto("https://www.demoblaze.com/");
})


test.afterAll('close page', async () => {

    await page.close();
    console.log("close page");
})


test.beforeEach('Login', async () => {

    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("suchishah");
    await page.locator("#loginpassword").fill("password");
    await page.locator("button[onclick='logIn()']").click();
    await page.waitForTimeout(5000);
})


test.afterEach('LogOut', async () => {


    await page.locator("#logout2").click();
})

test.describe('my group ', async () => {
    test("find no of products", async ({ }) => {

        const products = page.locator('#tbodyid .hrefch');
        const count = await products.count();
        console.log("number of products :", count);
        await expect(products).toHaveCount(9);

        console.log("this is test1...");

    })

    test("add products to cart", async () => {

        await page.locator("text='Samsung galaxy s7'").click();

        // handle alert before the click 
        page.once('dialog', async (dialog) => {
            expect(dialog.message()).toContain('Product added');
            await dialog.accept();

        });
        await page.locator('.btn.btn-success.btn-lg').click();
    })
})


