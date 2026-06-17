import { test, expect, Locator } from "@playwright/test"
//npx playwright test tests/grouping.spec.ts --grep Group1 --headed

test.describe('Group1', async () => {
    test("test1 demo", async () => {

        console.log("this is test1...");

    })

    test("test2 demo", async () => {

        console.log("this is test2...");

    })
})

test.describe('Group2', async () => {

    test("test3 demo", async () => {

        console.log("this is test3...");

    })
    test("test4 demo", async () => {

        console.log("this is test4...");

    })
})
test("test5 demo", async () => {

    console.log("this is test5...");

})
