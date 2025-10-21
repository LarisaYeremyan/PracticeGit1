import { chromium, test } from '@playwright/test';

test('Kick start with Play wright', async ({page}) => {
  // const browser = await chromium.launch();
  // const context = await browser.newContext();
  // const page = await context.newPage();

  await page.goto('https://google.com');

  await page.getByLabel('Google apps').click();

  
  console.log('My First Test');
});