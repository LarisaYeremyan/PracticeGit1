import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');
  await page.getByRole('textbox', { name: 'Search store' }).click();
  await page.getByRole('textbox', { name: 'Search store' }).fill('ring');
  await page.getByRole('textbox', { name: 'Search store' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page.getByRole('heading', { name: 'Search' })).toBeVisible();
  await page.getByRole('button', { name: 'Add to cart' }).nth(1).click();
  await page.getByRole('link', { name: 'Shopping cart (1)' }).click();
  await expect(page.locator('#topcartlink')).toContainText('Shopping cart');
  await expect(page.getByRole('textbox', { name: 'Qty.' })).toHaveValue('1');
  await expect(page.getByRole('textbox', { name: 'Qty.' })).toHaveValue('1');
});