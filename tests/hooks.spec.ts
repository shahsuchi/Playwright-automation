import { test, expect, Locator } from "@playwright/test"

test.beforeAll('Before ALL Hooks', async () => {

    console.log("before ALL method");
})


test.afterAll('After ALL Hooks', async () => {


    console.log("after ALL method");
})
test.beforeEach('Before Each Hooks', async () => {

    console.log("before each method");
})


test.afterEach('Before Each Hooks', async () => {


    console.log("after each method");
})

test("test1 demo", async () => {

    console.log("this is test1...");

})

test("test2 demo", async () => {

    console.log("this is test2...");

})


test("test3 demo", async () => {

    console.log("this is test3...");

})
test("test4 demo", async () => {

    console.log("this is test4...");

})
test("test5 demo", async () => {

    console.log("this is test5...");

})
