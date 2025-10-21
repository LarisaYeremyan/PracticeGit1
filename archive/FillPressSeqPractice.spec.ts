import {test} from '@playwright/test';

test('Fill Press and PressSeq Practice', async({page}) => {
  await page.goto('https://ultimateqa.com/filling-out-forms');
  await page.locator('#et_pb_contact_name_0').fill("TestCodeAutomate");
  await page.locator('#et_pb_contact_message_0').fill("learn for brighter tomorrow");
});