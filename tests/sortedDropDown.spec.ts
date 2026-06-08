import { test, expect, Locator } from "@playwright/test"

test("verify drop down is sorted", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //1. using visible text in form of array - all the option wanted to select will be put in array 

    const animalDropDownOption: String[] = (await (page.locator("#animals>option").allTextContents())).map(text => text.trim());
    console.log(animalDropDownOption);
    await page.waitForTimeout(5000);

    const originalAnimalDropDownOption = [...animalDropDownOption];
    // sort is mutable to its changin original value
    // ... is spread operator whihc is not changin original 
    const sortedAnimalDropDownOption = [...animalDropDownOption].sort();
    console.log(sortedAnimalDropDownOption);

    expect(originalAnimalDropDownOption).toEqual(sortedAnimalDropDownOption);




})
