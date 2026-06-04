import { test, expect, Locator } from "@playwright/test"

test("suplicate element drop down", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");



    const colorOption: string[] = (await (page.locator("#colors>option").allTextContents())).map(text => text.trim());
    console.log("total color option count is :", await page.locator("#colors>option").count());


    // set is not allowing duplicate element 

    const myset = new Set<string>(); // doesnt allow duplicate
    const duplicate: string[] = [];

    for (const text of colorOption) {
        if (myset.has(text)) {
            duplicate.push(text);
        } else {
            myset.add(text);
        }
    }

    console.log(myset);
    console.log(duplicate);
    const oCount = (colorOption).length;
    const setLength = (myset).size;

    console.log("Original Count:", oCount);
    console.log("Unique Count:", setLength);
    console.log("Duplicate Count:", duplicate.length);

    console.log("difference is", expect(duplicate.length).toBe(oCount - setLength));


})