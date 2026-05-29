import { test, expect, Locator } from "@playwright/test"

test("verify playwright locators", async ({ page }) => {
    await page.goto("https://demo.nopcommerce.com/");


    /*page.getByRole() to locate by explicit and implicit accessibility attributes.
      page.getByText() to locate by text content.
      page.getByLabel() to locate a form control by associated label's text.
      page.getByPlaceholder() to locate an input by placeholder.
      page.getByAltText() to locate an element, usually image, by its text alternative.
      page.getByTitle() to locate an element by its title attribute.
      page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
    */
    //All images should have an alt attribute that describes the image. You can locate an image based on the text alternative using page.getByAltText().
    //  will return locator - its also feature
    // await is needed if statement retuning any promise , action on element


    const logo: Locator = page.getByAltText('nopCommerce demo store');

    await expect(logo).toBeVisible;

    /*Find an element by the text it contains. You can match by a substring,
     exact string, or a regular expression when using page.getByText().
     We recommend using text locators to find non interactive elements like
     div, span, p, etc. For interactive elements like button, a, input, etc. use role locators. */

    //substring , regular expression will also work
    await expect(page.getByText("Welcome to our store")).toBeVisible;
    await expect(page.getByText("Welcome to")).toBeVisible;
    await expect(page.getByText(/Welcome\s+to\s+our\s+store/i)).toBeVisible;

    /* The page.getByRole() locator reflects how users and assistive technology perceive the page,
     for example whether some element is a button or a checkbox. When locating by role,
      you should usually pass the accessible name as well, so that the locator pinpoints the exact element.
      Its not attribute*/

    await page.getByRole("link", { name: 'Register' }).click();
    expect(page.getByRole("heading", { name: 'Register' })).toBeVisible;

    /*Most form controls usually have dedicated labels that could be conveniently used to interact with the form. 
    In this case, you can locate the control by its associated label using page.getByLabel(). */

    await page.getByLabel('First name:').fill('suchi');
    await page.getByLabel('Last name:').fill('shah');
    await page.getByLabel('Email:').fill('suchi.shah29@yahoo.co.in');

    /*nputs may have a placeholder attribute to hint to the user what value should be entered.
    You can locate such an input using page.getByPlaceholder(). */

    // await page.getByPlaceholder('Search store').fill('Karnavati');


    /**Locate by title Locate an element with a matching title attribute using page.getByTitle().
       For example, consider the following DOM structure.
     */

    await expect(page.getByTitle('Issues count')).toHaveText('25 issues');

    /* Locate by test id
Testing by test ids is the most resilient way of testing as even if your text or role of the attribute changes, 
the test will still pass. QA's and developers should define explicit test ids and query them with page.getByTestId().
 However testing by test ids is not user facing. 
If the role or text value is important to you then consider using user 
facing locators such as role and text locators.
For example, consider the following DOM structure*/

    await page.getByTestId('directions').click();

    await expect(page.getByTestId('directions')).toHaveText('suchi');

    await expect(page.getByTestId('directions')).toHaveText('suchi');


})
