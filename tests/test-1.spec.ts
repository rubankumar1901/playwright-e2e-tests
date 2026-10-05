import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Launch the application
  await page.goto('https://katalon-demo-cura.herokuapp.com/');
  
  // click on the "Make Appointment" link
  await page.getByRole('link', { name: 'Make Appointment' }).click();
  await expect(page.locator('#login')).toContainText('Please login to make appointment.');

  //login with valid credentials
  await page.getByLabel('Username').fill('John Doe');
  await page.getByLabel('Password').fill('ThisIsNotAPassword');
  await page.getByRole('button', { name: 'Login' }).click();

  //assert if the appointment page is loaded
  await expect(page.locator('//h2')).toHaveText('Make Appointment');

});
