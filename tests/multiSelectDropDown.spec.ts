import { test, expect, Locator } from "@playwright/test"

test("multiselect drop down", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //1. using visible text in form of array - all the option wanted to select will be put in array 

    await page.locator("#colors").selectOption(['Red', 'Blue', 'Green']);

    // 2. using value attribute
    await page.locator("#colors").selectOption(['green', 'white']);

    // 3. by using label
    await page.locator("#colors").selectOption([{ label: 'Red' }, { label: 'Green' }, { label: 'Yellow' }]);

    // 4. by using indexes
    await page.locator("#colors").selectOption([{ index: 0 }, { index: 5 }, { index: 6 }]);

    // get all the option from dropdown

    const colorOption: String[] = (await (page.locator("#colors>option").allTextContents())).map(text => text.trim());
    console.log("total color option count is :", page.locator("#colors>option").count());

    for (const color of colorOption) {
        console.log("value of color are :", color);
    }

    expect(colorOption).toContain("white");

})