import {test, expect} from "@playwright/test";

test('Title verification', async({page}) => {
  await page.goto('https://www.saucedemo.com/');
  expect(page).toHaveTitle('Swag Labs');
});

test('Succesfull Login verification', async({page}) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('#shopping_cart_container a')).toBeVisible();
});

// test('Unsuccesfull Login verification', async({page}) => {
//   await page.goto('https://www.saucedemo.com/');
//   await page.locator('[data-test="username"]').fill("standard_user_Wrong");
//   await page.locator('[data-test="password"]').fill('secret_sauce');
//   await page.locator('[data-test="login-button"]').click();
//   await expect(page.locator('#shopping_cart_container a')).toBeVisible();
// });
