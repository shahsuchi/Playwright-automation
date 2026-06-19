import { test, expect } from "@playwright/test";

import * as fs from "fs";
import * as XLSX from "xlsx";

// npm install xlsx  

//loaded xls file and read the data from it
const xlsxFilePath = "./testdata/data.xlsx";
const workBook = XLSX.readFile(xlsxFilePath);
const sheetNames = workBook.SheetNames[0];
const workSheet = workBook.Sheets[sheetNames];


//convert the data into json format
const loginData: any = XLSX.utils.sheet_to_json(workSheet);


console.log(loginData);


test.describe("Login data driven test", () => {
    for (const { email, password, validity } of loginData) {
        test(`login test for "${email}" and "${password}"`, async ({ page }) => {
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

