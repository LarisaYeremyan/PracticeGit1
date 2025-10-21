import {test} from '@playwright/test';

test("Handle Multiple Enviroments", async({page}) => {
  console.log(process.env.URL);
});
