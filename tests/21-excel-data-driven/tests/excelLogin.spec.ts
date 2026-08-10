import { test } from '@playwright/test';
import { ExcelUtils } from '../utils/ExcelUtils';

const data = ExcelUtils.readExcel(
  'tests/21-excel-data-driven/test-data/loginData.xlsx'
);

data.forEach((row: any, index: number) => {

  test(
    `Login Test ${index + 1} - ${row.username}`,
    async ({ page }) => {

      await page.goto('https://www.saucedemo.com/');

      await page.fill('#user-name', row.username);

      await page.fill('#password', row.password);

      await page.click('#login-button');

    }
  );

});