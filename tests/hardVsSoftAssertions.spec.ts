import { test, expect, Page, chromium, firefox, webkit } from "@playwright/test"

test('Assertions verifications', async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");

    // // hard assertions
    // await expect(page).toHaveTitle('Demo Web Shop2');
    // await expect(page).toHaveURL("https://demowebshop.tricentis.com/");

    // const logo = page.locator('img[alt="Tricentis Demo Web Shop"]');
    // await expect(logo).toBeVisible();


    // soft assertions
    await expect.soft(page).toHaveTitle('Demo Web Shop2');
    await expect.soft(page).toHaveURL("https://demowebshop.tricentis.com/");

    const logo1 = page.locator('img[alt="Tricentis Demo Web Shop"]');
    await expect.soft(logo1).toBeVisible();


    await page.waitForTimeout(5000);
})