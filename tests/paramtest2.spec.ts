import { test, expect, Page, chromium, firefox, webkit } from "@playwright/test"

// testdata
const loginTestData: string[][] = [
    ["laura.taylor1234@example.com", "test123", "valid"],
    ["invaliduser@example.com", "test123", "invalid"],
    ["validuser@example.com", "testxyz", "invalid"],
    ["", "", "invalid"],
];


//describe

test.describe('Login driven test', async () => {
    for (const [email, password, validity] of loginTestData) {
        test(`login test for ${email} and ${password}`, async ({ page }) => {
            await page.goto("https://demowebshop.tricentis.com/login");

            await page.locator('#Email').fill(email);
            await page.locator('#Password').fill(password);
            await page.locator('input[value="Log in"]').click();

            if (validity.toLowerCase() === 'valid') {
                // assert logout link is visible 
                const logoutLink = page.locator('a[href="/logout"]');
                await expect(logoutLink).toBeVisible({ timeout: 5000 });
            } else {
                await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');
            }
        })

    }
})
