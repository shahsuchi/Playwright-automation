import { test, expect, Locator } from "@playwright/test"

test("static web table", async ({ page }) => {

    // capture the table element 
    await page.goto("https://testautomationpractice.blogspot.com/");
    const table: Locator = page.locator("table[name='BookTable'] tbody");
    await expect(table).toBeVisible();

    //1. count number of rows in a table

    // const countRows: Locator = page.locator("table[name='BookTable'] tbody tr");
    const countRows: Locator = table.locator("tr"); // chaining of locator

    await expect(countRows).toHaveCount(7);
    console.log("row count :", await countRows.count());
    expect(await countRows.count()).toBe(7);
    const totalRows = await countRows.count();

    //2. count header column in table

    const countColumn: Locator = table.locator("th"); // chaining of locator

    await expect(countColumn).toHaveCount(4);
    console.log("column count :", await countColumn.count());
    expect(await countColumn.count()).toBe(4);

    // read all data from second 
    const nthRow: Locator = await countRows.nth(2).locator('td');


    const nthRowData: string[] = await nthRow.allInnerTexts();

    console.log("second row data:", nthRowData);
    // / [ 'Learn Java', 'Mukesh', 'Java', '500' ]

    await expect(nthRow).toHaveText(['Learn Java', 'Mukesh', 'Java', '500']);

    for (let text of nthRowData) {
        console.log(text);
    }

    // 4. read all the data from table icluding header

    console.log("printing all table data ");

    const allRowData = await countRows.all();

    console.log("all row data :", allRowData)
    for (let i = 0; i < totalRows; i++) {
        const cols = await countRows.nth(i).locator('td').allInnerTexts()
        console.log(cols.join('\t'));
    }

    // 5.print book name where authoe is mukesh
    const mukeshbooks: string[] = [];
    for (let rowdata of allRowData.slice(1)) { // skip header row
        const cells = await rowdata.locator('td').allInnerTexts();
        const author = cells[1];
        const course = cells[2];
        const fees = cells[3];
        const book = cells[0];
        if (author === 'Mukesh') {
            console.log("course :", course);
            console.log("course :", fees);
            console.log("book :", book);
            mukeshbooks.push(book);
            mukeshbooks.push(course);
        }

    }

    console.log(mukeshbooks);
    let totalPrice: number = 0;
    // 6. calculate totoal price of all the books
    for (let rowdata of allRowData.slice(1)) { // skip header row
        const cells = await rowdata.locator('td').allInnerTexts();
        const price = Number(cells[3]);
        totalPrice = totalPrice + price;
        console.log("updated price is :", totalPrice);
    }

    expect(totalPrice).toBe(7100);
})