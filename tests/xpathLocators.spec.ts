import { test, expect, Locator } from "@playwright/test";

test("xpathLocatorsTest", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");
    // relative xpath
    const logo: Locator = page.locator('//input[@value="Search store"][@type="text"]');
    await expect(logo).toBeVisible();
    // contains xpath

    const product: Locator = page.locator("//h2/a[contains(@href,'computer')]");
    // store in number
    const productCount: number = await product.count();
    console.log("no of computers :", productCount);
    expect(productCount).toBeGreaterThan(0);
    //  if its matching with more than one element then strict mode validation error will come
    // console.log(await product.textContent());

    console.log(await "first computer ", await product.first().textContent());
    console.log(await "last computer ", await product.last().textContent());
    console.log(await "nth computer ", await product.nth(3).textContent());
    // for single webelement used text conentent and for multiple webelement all text content will be used

    // for getting all textcontent

    let productitles: string[] = await product.allTextContents();
    console.log("all product title :", productitles);

    // pt is actual value of element
    for (let pt of productitles) {
        console.log(pt);
    }

    const productLabel: Locator = await page.locator("//h2/a[starts-with(@href,'/build')]");// return mutiple element
    const productLabelNumber: number = await productLabel.count();
    expect(productLabelNumber).toBeGreaterThan(0);
    let allProductLabel: string[] = await productLabel.allTextContents();

    for (let label1 of allProductLabel) {
        console.log(label1);
    }
    // . is used to represent the text
    // normalize space - ignore the space in value
    // text will consider the space also
    page.locator("//a[.='Register']");
    const registeLink: Locator = page.locator("//a[text()='Register']");
    expect(registeLink).toBeVisible();
    // will return last element
    const followUs: Locator = page.locator("//h3[text()='Follow us']/..//li").last();
    console.log("follow us last content: ", await followUs.textContent());
    console.log("follow us 3rd content: ", await page.locator("//h3[text()='Follow us']/..//li[position()=3]").textContent());

}

)

