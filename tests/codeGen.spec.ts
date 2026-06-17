import { test, expect } from '@playwright/test';
//npx playwright codegen --output tests/codegen.spec.ts

// npx playwright codegen --o tests/codegen.spec.ts --device "iPhone 15"

// npx playwright codegen -o tests/codegentest1.spec.ts --viewport-size "1280,720"
test('test', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    await page.getByRole('link', { name: 'Tricentis Demo Web Shop' }).click();
    await page.getByRole('link', { name: 'Register' }).click();
    await expect(page.locator('body')).toContainText('Books');
    await page.getByRole('link', { name: 'Log in1' }).click();
    await page.getByRole('button', { name: 'Register' }).click();
    await page.getByRole('radio', { name: 'Female' }).check();
    await page.getByRole('textbox', { name: 'First name:' }).click();
    await page.getByRole('textbox', { name: 'First name:' }).fill('suchi');
    await page.getByRole('textbox', { name: 'First name:' }).press('Tab');
    await page.getByRole('textbox', { name: 'Last name:' }).fill('shah');
    await page.getByRole('textbox', { name: 'Last name:' }).press('Tab');
    await page.getByRole('textbox', { name: 'Email:' }).fill('suchi.shah29@yahoo.co.in');
    await expect(page.getByRole('button', { name: 'Register' })).toBeVisible();
    await page.getByRole('link', { name: 'Apparel & Shoes' }).first().click();
});