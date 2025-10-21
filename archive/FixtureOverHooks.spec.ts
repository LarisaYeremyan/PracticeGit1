import {test, expect} from '../fixtures/HooksFixture';

test('Adding /Removing item to / from Cart verification', async({page, loginPage, logoutFixture}) => {
  //Adding and Removing Item from cart
  await page.getByText('Sauce Labs Backpack').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('.shopping_cart_link').click();
  await expect(page.getByRole('link', {name: 'Sauce Labs Backpack'})).toHaveText('Sauce Labs Backpack');
  await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
  await expect(page.getByRole('link', {name: 'Sauce Labs Backpack'})).not.toBeVisible();
});

test('Empty Cart Verification', async({page, loginPage, logoutFixture}) => {
  //Checking Empty Cart
  await page.locator('.shopping_cart_link').click();
  await expect(page.locator('.inventory_item_name')).not.toBeVisible();
});
