import {test as baseTest} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage'


type MyHooksFixtures = {
  loginFixture: any,
  logoutFixture: any,
  loginPage: LoginPage
}

export const test = baseTest.extend<MyHooksFixtures> ({
  loginPage: async({page}, use: any) => {
    const loginPage = new LoginPage(page)
    await loginPage.openApplication();
    await loginPage.login("standard_user", "secret_sauce");    
    await use(loginPage);
  },

  // loginFixture: async({page}, use: any) => {
  //   const loginFixture = undefined;

  //   //Login
  //   await page.goto('https://www.saucedemo.com/');
  //   await page.locator('[data-test="username"]').fill("standard_user");
  //   await page.locator('[data-test="password"]').fill("secret_sauce");
  //   await page.locator('[data-test="login-button"]').click();

  //   await use(loginFixture);
  // },

  logoutFixture: async({page}, use: any) => {
    const logoutFixture = undefined;
    //Logout
    await use(logoutFixture);
    await page.getByRole('button', {name: 'Open Menu'}).click();
    await page.getByRole('link', {name: 'Logout'}).click();    

  },  
})

export {expect} from '@playwright/test'
