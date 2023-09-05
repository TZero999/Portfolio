// @ts-check
const { test, expect } = require('@playwright/test');
const url = 'localhost:5500/';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('Portfolio Web-app is opening?', async ({page}) => {
    await page.goto(url);
    const title = page.locator('.Title');
    await expect(title).toHaveText('Ярослав');
});