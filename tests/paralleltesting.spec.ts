import { test, expect, Locator, Page } from "@playwright/test"

// test.describe.configure({ mode: "parallel" })

// test.describe.configure({ mode: "serial" })

// npx playwright test tests/paralleltesting.spec.ts  --headed --workers=4
test.describe(' group 1', async () => {
    test("Test11 ", async ({ page }) => {
        console.log(" test1");
    })

    test("Test1 ", async ({ page }) => {
        console.log(" test1");
    })

    test("Test2 ", async ({ page }) => {
        console.log(" test2");
    })


    test("Test3 ", async ({ page }) => {
        console.log(" test3");
    })

    test("Test4 ", async ({ page }) => {
        console.log(" test4");
    })
})