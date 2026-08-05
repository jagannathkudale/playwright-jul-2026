import {
  test,
  expect
}
from '../fixtures/customFixture';

test(
  'Login Using Fixture',
  async ({ page, loginPage }) => {

    await loginPage.navigate();

    await loginPage.login(
      'standard_user',
      'secret_sauce'
    );

    await expect(page)
      .toHaveURL(/inventory/);

  }
);