import { test, expect } from "@playwright/test"

test("inline frmae testing", async ({ page }) => {

    await page.goto("http://uitestingplayground.com/frames");

    // total number of frames present on the page

    const frames = page.frames();
    console.log("number of frames :", frames.length);
    // console.log("number of frames :", frames);

    // approach 1 - frmae itself page.frmae()

    const frame = page.frame({ url: "frame-inner" });

    if (frame) {
        console.log(await frame.locator("frame-label").innerText());
        await frame.fill("[name='mytext1']", "suchi");

    } else {
        console.log("")
    }
    await page.waitForTimeout(5000);

    // using framelocator 
    const inputbox = page.frameLocator("frame-inner").locator("[name='mytext1']");
    inputbox.fill("suchi");

})