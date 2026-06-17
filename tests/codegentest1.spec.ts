import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 720,
    width: 1280
  }
});

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).fill('suchi shah');
  await page.getByText('suchi shah linkedinHospital · Lal Darwaja, Varachha, Surat, GujaratSee more').click();
  await page.locator('iframe[name="a-ht4wcmqltty4"]').contentFrame().getByText('I\'m not a robot').click();
  await page.locator('iframe[name="c-ht4wcmqltty4"]').contentFrame().locator('[id="8"]').click();
  await page.locator('iframe[name="c-ht4wcmqltty4"]').contentFrame().locator('[id="12"]').click();
  await page.locator('iframe[name="c-ht4wcmqltty4"]').contentFrame().locator('[id="13"]').click();
  await page.locator('iframe[name="c-ht4wcmqltty4"]').contentFrame().locator('[id="9"]').click();
  await page.locator('iframe[name="c-ht4wcmqltty4"]').contentFrame().locator('[id="7"]').click();
  await page.locator('iframe[name="c-ht4wcmqltty4"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.getByRole('link', { name: 'Images' }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('suchi shah linkedin qa automation');
  await page.goto('https://www.google.com/search?q=suchi+shah+linkedin+qa+automation&sca_esv=07a46b020f30d9f9&udm=2&biw=1280&bih=720&ei=WiIwarLoHL3W1e8PuuDUoQw&ved=0ahUKEwiy_cPBz4mVAxU9a_UHHTowNcQQ4dUDCBM&uact=5&oq=suchi+shah+linkedin+qa+automation&gs_lp=Egtnd3Mtd2l6LWltZyIhc3VjaGkgc2hhaCBsaW5rZWRpbiBxYSBhdXRvbWF0aW9uSJEmUJ0HWIolcAF4AJABAJgBuQGgAfIMqgEENC4xMLgBA8gBAPgBAZgCAqACdsICBBAAGB6YAwCIBgGSBwMxLjGgB8YBsgcDMC4xuAdwwgcFMC4xLjHIBwWACAE&sclient=gws-wiz-img');
});