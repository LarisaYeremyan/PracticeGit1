import {test, expect} from '@playwright/test';

test.only("Visual Testing Verification", async({page}) => {
  await page.goto("https://the-internet.herokuapp.com/tables");
  //await expect(page).toHaveScreenshot();
  //await expect(page).toHaveScreenshot("VisualTesting.png");
  //await expect(page).toHaveScreenshot(["ChildFolder1/ChildFolder2", "VisualTestingWithChildFolder1.png"]);
  //await expect(page).toHaveScreenshot(["ChildFolder3", "abc", "VisualTestingWithChildFolder2.png"]);
  //await expect(page).toHaveScreenshot("FullNamePractice.png", {fullPage: true});
  //await expect(page).toHaveScreenshot("MaxDiffPixelPractice.png", {maxDiffPixels: 800});

});

test("Visual Testing - Iframe hiding Verification", async({page}) => {

})

test("Non Image Screenshot", async({page}) => {
  
})
