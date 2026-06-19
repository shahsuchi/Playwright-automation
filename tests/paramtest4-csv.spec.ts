import { test, expect } from "@playwright/test";
import * as fs from "fs";
import { parse } from "csv-parse/sync";
// npm install csv-parse  
// npm install xlsx  

const csvFilePath = "./testdata/data.csv";
const fileContent = fs.readFileSync(csvFilePath, "utf-8");


interface LoginData {
    email: string;
    password: string;
    validity: string;
}
const loginData = parse<LoginData>(fileContent, { columns: true, skip_empty_lines: true });




test.describe("Login data driven test", () => {
    for (const data of loginData) {
        test(`login test for ${data.email} and ${data.password}`, async ({ page }) => {
            await page.goto("https://demowebshop.tricentis.com/login");

            await page.locator("#Email").fill(data.email);
            await page.locator("#Password").fill(data.password);
            await page.locator('input[value="Log in"]').click();

            if (data.validity.toLowerCase() === "valid") {
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

