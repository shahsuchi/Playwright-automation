import { test, expect, Locator } from "@playwright/test"

test("Read all data from all the table pages", async ({ page }) => {
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");

    const rows: Locator[] = await page.locator('#example  tbody tr').all();
    // const nextButton = page.getByRole('button', { name: 'Next' });
    const nextButton = page.locator("button[aria-label='Next']");


    let hasmorePages = true;
    for (let row of rows) {
        let rowValue = await row.innerText();
        console.log("rowValues", rowValue);
    }
    while (hasmorePages) {

        const rows: Locator[] = await page.locator('#example  tbody tr').all();
        for (let row of rows) {
            let rowValue = await row.innerText();
            console.log("rowValues", rowValue);
        }
        const isEnabledValue = await nextButton.getAttribute('class');
        if (isEnabledValue?.includes('disabled')) {

            hasmorePages = false;
        } else {
            await nextButton.click();
        }
    }
    await page.waitForTimeout(5000);
})

test("filter the rows and check the rows count", async ({ page }) => {
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");
    const dropDown: Locator = page.locator('#dt-length-0');
    await dropDown.selectOption({ label: '25' });


    const rows: Locator[] = await page.locator('#example  tbody tr').all();
    const rowCount = rows.length;
    console.log("total rows are :", rowCount);
    expect(rowCount).toBe(25);
    await page.waitForTimeout(5000);
})

test("search for specific data into table", async ({ page }) => {
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");
    const searchBox: Locator = page.locator('#dt-search-0');
    await searchBox.fill('Unity');


    const rows: Locator[] = await page.locator('#example  tbody tr').all();
    const rowCount = rows.length;
    console.log("total rows are :", rowCount);
    if (rows.length >= 1) {
        let matchFound = false;
        for (let row of rows) {
            expect(row).toContainText('Unity');
            console.log("match found");
            matchFound = true;
        }
        expect(matchFound).toBeTruthy();
    }
    else {
        console.log("no rows found with search text");
    }



    await page.waitForTimeout(5000);
})