import { test, expect, Locator } from "@playwright/test";

test("xpath Axes Locator", async ({ page }) => {

    await page.goto("https://www.w3schools.com/html/html_tables.asp");

    // 1. self node locator
    const selfLocator: Locator = page.locator("//td[text()='Germany']/self::td");
    console.log("self value :", await selfLocator.textContent());
    expect(selfLocator).toBeVisible();
    await expect(selfLocator).toHaveText('Germany');

    // 2. parent node locator and get its child value
    const parentLocator: Locator = page.locator("//td[text()='Germany']/parent::tr");
    await expect(parentLocator).toContainText('Maria Anders');


    /*toContainText can verify combine text as well -
     All nested elements will be considered when computing the text content of the element.
     You can use regular expressions for the value as well. */

    await expect(parentLocator).toContainText('Alfreds Futterkiste Maria Anders Germany');

    const parentLocator1: Locator = page.locator("//td[text()='Germany']/parent::tr/td[1]");
    console.log("parent value :", await parentLocator.textContent());
    expect(parentLocator1).toBeVisible();
    await expect(parentLocator1).toHaveText('Alfreds Futterkiste');

    // 3. child element - get td children of second tr

    const chilldLocator: Locator = page.locator("//table[@id='customers']//tr[3]/child::td");
    await expect(chilldLocator).toHaveCount(3);
    console.log("child elements are ", await chilldLocator.allTextContents());


    // 4. ancestor - //td[text()='Austria']/ancestor::* will return all the ancestor
    const ancestorLocator: Locator = page.locator("//td[text()='Austria']/ancestor::table");
    await expect(ancestorLocator).toHaveCount(1);
    console.log("ancestor elements are ", await ancestorLocator.allTextContents());
    await expect(ancestorLocator).toHaveAttribute('id', 'customers');

    // 5. descendant - child and grand child
    const descendantLocator: Locator = page.locator("//table[@id='customers']//descendant::td");
    await expect(descendantLocator).toHaveCount(18);
    console.log("descendant elements are ", await descendantLocator.allTextContents());

    // 6. following - sibling and children of sibling
    const followingLocator: Locator = page.locator("//td[text()='Mexico']/following::tr/td");
    await expect(followingLocator).toHaveCount(32);
    console.log("following elements are ", await followingLocator.allTextContents());

    // 7. following-sibling - sibling 
    const followingSiblingLocator: Locator = page.locator("//td[normalize-space()='Roland Mendel']/following-sibling::td");
    await expect(followingSiblingLocator).toHaveCount(1);
    console.log("following sibling elements are ", await followingSiblingLocator.allTextContents());


    // 8. preceding - before curent node sibling and children of it
    const precedingLocator: Locator = page.locator("//td[normalize-space()='Roland Mendel']/preceding::td");
    await expect(precedingLocator).toHaveCount(7);
    console.log("preceding elements are ", await precedingLocator.allTextContents());
    console.log("nth preceding elements is ", await precedingLocator.nth(4).textContent());


    // 8. preceding sibling- before curent node sibling
    const precedingSiblingLocator: Locator = page.locator("//td[normalize-space()='Roland Mendel']/preceding-sibling::td");
    await expect(precedingSiblingLocator).toHaveCount(1);
    console.log("preceding sibling elements are ", await precedingSiblingLocator.allTextContents());
}
)