import { test, expect } from "@playwright/test";

// Read testdata from json
import loginData from "../testdata/data.json";

type LoginRow = {
    email: string;
    password: string;
    validity: string;
};

// data.json structure in this repo is: [[ {email, password, validity}, ... ]]
const loginTestData: LoginRow[] = Array.isArray((loginData as any)?.[0])
    ? (loginData as any)[0]
    : (loginData as any);

test.describe("Login driven test", () => {
    for (const { email, password, validity } of loginTestData) {
        test(`login test for ${email} and ${password}`, async ({ page }) => {
            await page.goto("https://demowebshop.tricentis.com/login");

            await page.locator("#Email").fill(email);
            await page.locator("#Password").fill(password);
            await page.locator('input[value="Log in"]').click();

            if (validity.toLowerCase() === "valid") {
                const logoutLink = page.locator('a[href="/logout"]');
                await expect(logoutLink).toBeVisible({ timeout: 5000 });
            } else {
                await expect(page).toHaveURL(
                    "https://demowebshop.tricentis.com/login"
                );
            }
        });
    }
});

