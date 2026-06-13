import { test, expect, Locator, Page } from "@playwright/test"

test("simple dialog scenarios", async ({ page }) => {
    /*By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them.
     However, you can register a dialog handler before the action that triggers the dialog to 
     either dialog.accept() or dialog.dismiss() it.*/
    await page.goto("https://testautomationpractice.blogspot.com/");

    // enable alert handling
    //  dialog is name of event
    page.on('dialog', (dialog) => {
        console.log("dialoge type: ", dialog.type());
        expect(dialog.type()).toContain('alert');
        console.log("dialoge message: ", dialog.message());
        expect(dialog.message()).toContain('I am an alert box!');

        dialog.accept()
    });

    //simple alert - open dialog
    await page.locator("#alertBtn").click();

    await page.waitForTimeout(5000);

})

test("confirmation alert dialog scenarios", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    let alertStatus: boolean = true;
    // enable alert handling
    page.on('dialog', (dialog) => {
        console.log("dialoge type: ", dialog.type());
        expect(dialog.type()).toContain('confirm');
        console.log("dialoge message: ", dialog.message());
        expect(dialog.message()).toContain('Press a button!');
        if (alertStatus) {
            dialog.accept();

        } else {
            dialog.dismiss();

        }
    });

    //confirmation alert - open dialog
    await page.locator("#confirmBtn").click();
    if (alertStatus) {
        console.log("which button got pressed:", await page.locator('#demo').innerText())
        await expect(page.locator('#demo')).toHaveText('You pressed OK!');

    } else {
        console.log("which button got pressed:", await page.locator('#demo').innerText())
        await expect(page.locator('#demo')).toHaveText('You pressed Cancel!');

    }
    await page.waitForTimeout(5000);


})

test.only("prompt alert dialog scenarios", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    let alertStatus: boolean = true;
    // enable alert handling
    page.on('dialog', (dialog) => {
        console.log("dialoge type: ", dialog.type());
        expect(dialog.type()).toContain('prompt');
        console.log("dialoge message: ", dialog.message());
        expect(dialog.message()).toContain('Please enter your name:');
        // verify default value of the dialog
        expect(dialog.defaultValue()).toContain('Harry Potter');
        if (alertStatus) {
            // while accepting alert can pass the parameter
            dialog.accept('suchi shah');

        } else {
            dialog.dismiss();

        }
    });

    //prompt dialog alert - open dialog
    await page.locator("#promptBtn").click();
    if (alertStatus) {
        await expect(page.locator('#demo')).toHaveText('Hello suchi shah! How are you today?');

    } else {
        await expect(page.locator('#demo')).toHaveText('User cancelled the prompt.');

    }
    await page.waitForTimeout(5000);


})