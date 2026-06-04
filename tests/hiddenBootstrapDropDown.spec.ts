import { test, expect, Locator } from "@playwright/test"

test("bootstrap hidden dropdown", async ({ page }) => {

    page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // login steps
    await page.waitForTimeout(8000);
    await expect(page.locator("input[name='username']")).toBeVisible();
    await page.waitForTimeout(8000);

    page.locator("input[name='username']").fill("Admin");
    page.locator("input[name='password']").fill("admin123");
    page.locator("input[name='username']").fill("Admin");

    await page.locator("button[type='submit']").click();

    await page.getByText("PIM").click();

    await page.waitForTimeout(5000);

    await page.locator('form i').nth(2).click();

    // capture all the options from the dropdown

    const options: Locator = page.locator("div[role='listbox'] span");
    const count = await options.count();
    console.log("number of element in the list", count);

    for (let i = 0; i < count; i++) {
        const text = await options.nth(i).textContent();
        console.log("element at ith position is :", text);
        if (text === 'Automation Tester') {
            await options.nth(i).click();
            break;
        }
    }
    await page.waitForTimeout(5000);


})
