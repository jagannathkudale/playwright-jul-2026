import { test } from '@playwright/test';

test('Drag and Drop', async ({ page }) => {

  await page.setContent(`
    <div id="drag"
         draggable="true"
         style="width:100px;height:100px;background:red;">
      Drag Me
    </div>

    <div id="drop"
         style="width:150px;height:150px;border:2px solid black;margin-top:20px;">
      Drop Here
    </div>
  `);
 
  await page.dragAndDrop('#drag', '#drop');

  await page.waitForTimeout(3000);

});