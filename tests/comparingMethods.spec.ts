import { test, expect, Locator } from "@playwright/test"

test("comparing methods", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");

    const products: Locator = page.locator(".product-title");

    //1. innerText() vs textcontent()

    console.log(await products.nth(2).innerText()); // without space 
    console.log(await products.nth(2).textContent()); // with space , line breaks and etc

    const count = await products.count();

    for (let i = 0; i < count; i++) {
        const productName = await products.nth(i).innerText(); //innext text return string , but text content will return null
        console.log(productName);
    }

    //2. allinnertext vs all textcontent

    const productName: String[] = await products.allInnerTexts();
    console.log("inner text :", productName);

    const productName2: String[] = (await products.allTextContents()).map(text => text.trim());
    console.log("allTextContents text :", productName2);

    // 3. all() - return locator of the product
    const productLocator: Locator[] = await products.all();
    console.log("productLocator text :", productLocator);
    console.log(await productLocator[1].innerText());

    for (let productLocator1 of productLocator) {
        console.log("", await productLocator1.innerText());
    }

})