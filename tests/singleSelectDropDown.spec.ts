import { test, expect, Locator } from "@playwright/test"

test("single select locator", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    // select option from the drop down
    //1. by visible text
    await page.locator("#country").selectOption("India");
    //2. by value - use {attrubute name : value } 
    await page.locator("#country").selectOption({ value: "australia" });
    //3. by using label
    await page.locator("#country").selectOption({ label: "Germany" });
    //4. by using index
    await page.locator("#country").selectOption({ index: 3 });

    await page.waitForTimeout(5000);

    // check number of element in dropdown
    const dropdownOptions: Locator = page.locator("#country>option");
    const count: number = await dropdownOptions.count();
    console.log("dropdowna count is :", count);
    expect(dropdownOptions).toHaveCount(10);

    // get all the option value
    const optionValue: string[] = (await dropdownOptions.allTextContents()).map(text => text.trim());
    // trim the elements
    console.log("optionValuet is :", optionValue);

    // check option is present or not
    expect(optionValue).toContain("Germany");

    await page.waitForTimeout(5000);

    // printing options from the dropdown

    for (const option of optionValue) {
        console.log("option value :", option);
    }



})
