import { test, expect, Locator, Page } from "@playwright/test"


test("bootstrap Date Picker", async ({ page }) => {

    await page.goto("https://www.booking.com/");
    await page.waitForTimeout(5000);
    let checkInyear = '2027';
    let checkInmonth = 'July';
    let checkIndt = '10';

    // check in date selection 
    await page.locator('button[aria-label^="Dismiss"]').click();

    const checkInDate: Locator = page.locator('button[aria-label="Select dates"]');
    await expect(checkInDate).toBeVisible();
    await checkInDate.click();
    await page.waitForTimeout(5000);

    while (true) {
        const checkInMonthYear = await page.locator("h3[id^='bui-calendar-month']").nth(0).innerText();
        const currentMonth = checkInMonthYear.split(" ")[0];
        const currentYear = checkInMonthYear.split(" ")[1];
        console.log("year ", currentYear);
        console.log("month", currentMonth);
        if (checkInmonth === currentMonth && checkInyear === currentYear) {
            break;
        } else {
            await page.locator('button[aria-label="Next month"]').click();
        }
    }
    await page.waitForTimeout(5000);

    let allDates = await page.locator('table.b8fcb0c66a tbody').nth(0).locator('td').all();
    let checkinDateSelected = false;

    for (let date of allDates) {
        const dateText = await date.innerText();
        if (dateText === checkIndt) {
            await date.click();
            checkinDateSelected = true;
            break;
        }
    }
    expect(checkinDateSelected).toBeTruthy();
    await page.waitForTimeout(5000);


    let checkOutyear = '2027';
    let checkOutmonth = 'August';
    let checkOutdt = '11';

    // check in date selection 
    // await page.locator('button[aria-label^="Dismiss"]').click();

    // const checkInDate: Locator = page.locator('button[aria-label="Select dates"]');
    // await expect(checkInDate).toBeVisible();
    // await checkInDate.click();
    // await page.waitForTimeout(5000);

    while (true) {
        const checkOutMonthYear = await page.locator("h3[id^='bui-calendar-month']").nth(1).innerText();
        const currentMonth = checkOutMonthYear.split(" ")[0];
        const currentYear = checkOutMonthYear.split(" ")[1];
        console.log("year ", currentYear);
        console.log("month", currentMonth);
        if (checkOutmonth === currentMonth && checkOutyear === currentYear) {
            break;
        } else {
            await page.locator('button[aria-label="Next month"]').click();
        }
    }
    await page.waitForTimeout(5000);

    let allDates1 = await page.locator('table.b8fcb0c66a tbody').nth(1).locator('td').all();
    let checkoutDateSelected = false;

    for (let date of allDates1) {
        const dateText = await date.innerText();
        if (dateText === checkIndt) {
            await date.click();
            checkoutDateSelected = true;
            break;
        }
    }
    expect(checkoutDateSelected).toBeTruthy();

})