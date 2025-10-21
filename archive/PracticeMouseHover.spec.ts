import {test} from '@playwright/test';

  test("Practice Mouse hover action", async({page}) => {
    await page.goto("https://demo.opencart.com/");
    await page.getByRole('link', {name: 'Component', exact: true}).hover();
    await page.getByRole('link', {name: 'Show All Components'}).click();


  });
