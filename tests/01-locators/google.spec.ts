import{test,expect} from '@playwright/test';
test('Open Google',async({page})=>{
    await page.goto('https://www.google.com');
    console.log(await page.title());
    await expect(page).toHaveTitle(/Google/)
});