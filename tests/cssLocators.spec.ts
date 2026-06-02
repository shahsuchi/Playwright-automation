import { test, expect, Locator } from "@playwright/test"

test("css locator test", async ({ page }) => {
    /*css - cascading style sheet
    html + javascript + css
    
    2 types of css
    1. absoulte css locator 
    2. relative css locator
    tag is optional 
    tag with id  -> tag#
    tag with class -> tag.
    tag with any other attribute -> tag[attribute=value]
    tag with class any other attribute ->tag.class[attribute=value]
    */

    await page.goto("https://demowebshop.tricentis.com/");
    //1. tag with id
    const searchbox: Locator = page.locator("input#small-searchterms");
    await expect(searchbox).toBeVisible();
    await searchbox.fill("palmtop");

    //2. tag with class
    const searchboxClass: Locator = page.locator(".search-box-text");
    await expect(searchboxClass).toBeVisible();
    await searchboxClass.fill("desktop");

    //3. attribute and value
    const nameAttribute: Locator = page.locator("[name='q']");
    await expect(nameAttribute).toBeVisible();
    await nameAttribute.fill("laptop");

    //4. attribute and value
    const classAttribute: Locator = page.locator("input.search-box-text[value='Search store']");
    await expect(classAttribute).toBeVisible();
    await classAttribute.fill("top");

    // absolute css ==  greater than > symbol is used for navigating ,only top to bottom approach
    // ^ used for start with , $ is used for match end with 
    // p[id$='a2'] ends with 
    // p[class*='a1'] contains
    // p[class^='a1']
    // p[class^='a1']:not[id='main']   first valid second invalid
    // p:not([class^='a1'])[id='main'] first invalid second valid
    // p:not([class^='a1']):not([id='main'])
    // p[id='para1']+p      sibling
    // p[id='para1']+*      all the element



    await page.goto("https://testpages.eviltester.com/pages/basics/basic-web-page/");
    const headerAttribute: Locator = page.locator("p#para1");
    await expect(headerAttribute).toBeVisible();
    await expect(headerAttribute).toHaveText("A paragraph of text");
})