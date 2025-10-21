import {test, expect} from '@playwright/test';

  test("Practice Drag and Drop", async({page}) => {
    await page.goto("https://demoqa.com/droppable");

    //Approach 1 - Manualway to Drag and Drop
    // await page.getByText('Drag me', { exact: true }).hover();
    // await page.mouse.down();
    // await page.getByRole('tabpanel', { name: 'Simple' }).locator('#droppable').hover();
    // await page.mouse.up();
    // await expect(page.getByRole('tabpanel', { name: 'Simple' }).locator('#droppable')).toHaveText('Dropped!');

    //Approach 2 - dragTo()
    await page.getByText('Drag me', { exact: true }).dragTo(page.getByRole('tabpanel', { name: 'Simple' }).locator('#droppable'), {
      sourcePosition: {x:0, y:0},
      targetPosition: {x:0, y:0}
    });
    await expect(page.getByRole('tabpanel', { name: 'Simple' }).locator('#droppable')).toHaveText('Dropped!');
  });
