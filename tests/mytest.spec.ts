import { test, expect } from "@playwright/test"
// fixture - global variable , everwhere u can access : eg page , browser
//Async functions return: promise
test("verify page title", async ({ page }) => {

  // launch webpage - default it will excute in 3 browser if browser name is not sepcified ,
  //  it will take from config file
  await page.goto("https://vistosys.com/");
  // assertion can  be accessed through excpet function
  let pagetitle1: String = await page.title();
  console.log("Title value is ", pagetitle1);
  await expect(page).toHaveTitle("WordPress Developer India | Website Design, Bug Fixing & Shopify Setup – Vistosys");
})