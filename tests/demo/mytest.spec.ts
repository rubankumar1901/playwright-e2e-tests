import { test, expect } from "@playwright/test";

test("Should load home page with correct title", async ({ page }) => {
    // Go to the home page
    await page.goto("https://katalon-demo-cura.herokuapp.com/");

    // Assert if the title is correct
    await expect(page).toHaveTitle("CURA Healthcare Service");
 
    // Assert header text
    await expect(page.locator('//h1')).toHaveText('CURA Healthcare Service')
});

test("basic test", {tag: "@smoke"}, async ({ page }, testInfo) => {
    
    //steps
    await page.locator("//h1").click();
});

test.only("Demo Locators", async ({ page }) => {

    // Go to the home page
    await page.goto("https://katalon-demo-cura.herokuapp.com/");

    // click on Make Appointment
    let makeappmtBtn = page.getByRole("link", {name: "make appointment"});
    //console.log(`>> The type of the loactor: ${typeof makeappmtBtn}, The value of the locator: ${JSON.stringify(makeappmtBtn)}`);
    await page.getByRole('heading', { name: 'We Care About Your Health' }).click();
});