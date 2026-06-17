import { test, expect, Page, chromium, firefox, webkit } from "@playwright/test"

test('Assertions verifications', async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");

    await expect(page).toHaveURL("https://demowebshop.tricentis.com/");
    await expect(page.locator('.topic-html-content-header')).toBeVisible();

    // auto retry assertion
    await page.locator('#small-searchterms').fill("Laptop", { force: true });
    await page.locator('.button-1.search-box-button').click({ force: true });


    // non retrying aeesertion
    const title = await page.title();
    expect(title.includes('Demo Web Shop')).toBeTruthy(); // no auto retry

    const welcometext = await page.locator('text=Welcome to our store').textContent();
    expect(welcometext).toContain('Welcome'); // non retrying

    // negative matcher

    await page.locator('text=Welcome to our store').textContent();
    expect(welcometext).not.toContain('Welcome'); // non auto retry

    await page.waitForTimeout(5000);
})