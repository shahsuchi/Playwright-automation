import { test, expect, Locator, Page } from "@playwright/test"

async function selectDate(targetYear: string, targetMonth: string, targetDate: string, page: Page, isFuture: boolean) {
    while (true) {
        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        console.log("current year", currentYear);
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();
        console.log("currentMonth", currentMonth);

        if (currentYear === targetYear && currentMonth === targetMonth) {
            break;
        }
        else if (isFuture == true) {
            // future data - next button
            await page.locator(".ui-datepicker-next").click();
        }
        else {
            //past data -  previous button
            await page.locator(".ui-datepicker-prev").click();
        }


    }


    const allDates = await page.locator('.ui-datepicker-calendar td').all();

    for (let dt of allDates) {
        const dateText = await dt.innerText();
        if (dateText === targetDate) {
            await dt.click();
            break;

        }
    }

}

test("jQuery Date Picker", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const datePicker1: Locator = page.locator("#datepicker");
    await expect(datePicker1).toBeVisible();
    //1. using fill method
    // datePicker1.fill('10/01/1990'); //mm/dd/yyyy

    // 2. seelct target date
    await datePicker1.click();
    const year = '2027';
    const month = 'October';
    const date = '10';

    await selectDate(year, month, date, page, true);
    await page.waitForTimeout(5000);

    const expectedDate = '10/10/2027';
    await expect(datePicker1).toHaveValue(expectedDate);

    await page.waitForTimeout(5000);


})