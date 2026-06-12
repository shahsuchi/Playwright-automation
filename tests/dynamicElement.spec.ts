import { test, expect, Locator } from "@playwright/test";

test("dynamic web element test", async ({ page }) => {

    page.goto("https://testautomationpractice.blogspot.com/");

    for (let i = 0; i < 5; i++) {
        // xpath locator
        // let button: Locator = await page.locator("//button[text()='START' or text()='STOP']");

        // css locator
        // const button = page.locator('button[name="START"],button[name="STOP"]');
        // get by role name
        const button = page.getByRole('button', { name: /START|STOP/ });

        await button.click();

        await page.waitForTimeout(2000);
    }

}
);
