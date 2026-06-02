import { test, expect, Locator } from "@playwright/test"

test("Text actions Example", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const nameTextBox: Locator = page.locator('#name');
    await expect(nameTextBox).toBeVisible();
    await expect(nameTextBox).toBeEnabled();
    const maxlength: string | null = await nameTextBox.getAttribute('maxlength'); // returns the value of maxlenght attribute on the element
    expect(maxlength).toBe("15");
    await nameTextBox.fill("suchi");

    // get the value from input box - textContent cant be used as its not present in DOM
    // for cpaturing the value entered in the textbox  -inputValue
    const nameAttributeValue: string | null = await nameTextBox.inputValue();
    console.log("text content of name field :", nameAttributeValue);
    expect(nameAttributeValue).toBe("suchi");

    await page.waitForTimeout(3000);

    //  checkboxes and radio button

});
// only one test will run
// test.only("radio button actions Example", async ({ page }) => {

test("radio button actions Example", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //male radio button
    const maleRadioButton: Locator = page.locator('#male');
    await expect(maleRadioButton).toBeVisible();
    await expect(maleRadioButton).toBeEnabled();

    expect(await maleRadioButton.isChecked()).toBe(false);

    await maleRadioButton.check();
    expect(await maleRadioButton.isChecked()).toBe(true);
    expect(maleRadioButton).toBeChecked();
    console.log("maleRadioButton :", await maleRadioButton.getAttribute("value"));

    await page.waitForTimeout(3000);

});

test.only("checkbox actions Example", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //checkbox
    const sundayCheckbox: Locator = page.getByLabel('Sunday');
    await expect(sundayCheckbox).toBeVisible();
    await expect(sundayCheckbox).toBeEnabled();

    expect(await sundayCheckbox.isChecked()).toBe(false);

    // await sundayCheckbox.check();
    // expect(await sundayCheckbox.isChecked()).toBe(true);
    // expect(sundayCheckbox).toBeChecked();
    // console.log("sundayCheckbox :", await sundayCheckbox.getAttribute("value"));

    // select all the checkbox

    const allDayCheckbox: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const allDayCheckboxLabel: Locator[] = allDayCheckbox.map(index => page.getByLabel(index));
    expect(allDayCheckboxLabel.length).toBe(7);

    await page.waitForTimeout(3000);

    for (const checkbox of allDayCheckboxLabel) {
        await checkbox.check();
        expect(checkbox).toBeChecked();

    }
    // not is used for verifying not checked or not visible etc 
    for (const checkbox of allDayCheckboxLabel.slice(-3)) {
        await checkbox.uncheck();
        expect(checkbox).not.toBeChecked();

    }

    // Toggle Checkbox: select unselected checkbox and unselect selected checkbox

    for (const checkbox of allDayCheckboxLabel) {
        if (await checkbox.isChecked()) {
            await checkbox.uncheck();
            expect(checkbox).not.toBeChecked();
        } else {
            await checkbox.check();
            expect(checkbox).toBeChecked();
        }

    }
    await page.waitForTimeout(3000);
    //  randomly select checkbox by index (1,3,6)

    // const indexes: number[] = [1, 3, 6];
    // for (const i of indexes) {
    //     await allDayCheckboxLabel[i].check();
    //     await expect(await allDayCheckboxLabel[i]).toBeChecked();
    // }

    // select checkbox by value
    const weekDay: String = "Tuesday";

    for (const label of allDayCheckbox) {
        if (label.toLowerCase() === weekDay.toLowerCase()) {
            await page.getByLabel(label).check();
        }
    }
    await page.waitForTimeout(10000);


});