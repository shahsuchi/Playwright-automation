import { test, expect, Locator } from "@playwright/test"

test("auto suggest drop down", async ({ page }) => {


    await page.goto("https://www.flipkart.com/");

    // search text
    await page.locator("form input[name='q']").fill("smart");
    // get all suggested option cmd shift p  -> emulate focused page
    await page.waitForTimeout(5000);

    const options: Locator = page.locator("ul>li");
    const count = await options.count();
    console.log("no of suggested options :", count);
    options.nth(3).innerText();

    const OptionsValue: String[] = await page.locator("ul>li").allTextContents();
    console.log("OptionsValue", OptionsValue);

    // printing all the suggested option in console
    for (let i = 0; i < count; i++) {
        // depends on the htmml need to choose 
        // console.log(await options.nth(i).innerText()); // inner text seperated the spaces in to 2 lines
        // console.log(await options.nth(i).textContent());
        const text: string | null = await options.nth(i).textContent();
        if (text === 'smartphone') {

            await options.nth(i).click();
            break;
        }

    }




})