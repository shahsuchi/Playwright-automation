import { test, expect, Locator } from "@playwright/test"

test("Verify chrome cpu load in dynamic table", async ({ page }) => {
    await page.goto("https://practice.expandtesting.com/dynamic-table");

    const table: Locator = page.locator("table.table-striped");
    await expect(table).toBeVisible();
    const tableRow: Locator = page.locator('table.table tbody tr');
    const tableRowCount: number = await tableRow.count();

    const rowdata: Locator[] = await tableRow.all();

    console.log("rowCount :", rowdata.length);
    const headerRow: Locator = table.locator('tr').first().locator('th');
    const headerRowData: String[] = await headerRow.allInnerTexts();
    console.log("header row data :", headerRowData);
    console.log(" row count data :", tableRowCount);
    expect(tableRowCount).toBe(4);

    // 1. for chrome get value of CPU load

    let cpuLoad = '';
    for (const row of rowdata) {
        const processName: string = await row.locator('td').nth(0).innerText();
        console.log(processName);
        if (processName === 'Chrome') {
            cpuLoad = await row.locator("td", { hasText: "%" }).innerText();
            console.log("CPULOad :", cpuLoad);
            break;
        }
    }
    //2. compare it with value in the yellow box text
    let yellowBoxText: string = await page.locator('#chrome-cpu').innerText();
    console.log("Chrome CPU Load value :", yellowBoxText);

    if (yellowBoxText.includes(cpuLoad)) {
        console.log("same cpu value");
    } else {
        console.log("diffn cpu value");
    }


})