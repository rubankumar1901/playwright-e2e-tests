import { test, expect } from "@playwright/test";

test.describe("Make Appointment", () => {

  test.beforeEach("Login with valid credentials",async ({ page }) => {

    // Go to the home page
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await expect(page.locator("h1")).toContainText("CURA Healthcare Service");
    await page.getByRole("link", { name: "Make Appointment" }).click();

    //login
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();
  });

  test("Book an appointment", async ({ page }) => {
    //dropdown
    await page.getByLabel("Facility").selectOption("Hongkong CURA Healthcare Center");

    //checkbox
    await page.getByRole("checkbox", { name: "Apply for hospital readmission" }).check();

    //radio button
    await page.getByRole("radio", { name: "Medicaid" }).check();

    //date picker
    await page.getByLabel("Visit Date (Required)").click();
    await page.getByRole("cell", { name: "10" }).click();

    //text area
    await page.getByRole("textbox", { name: "Comment" }).click();
    await page.getByRole("textbox", { name: "Comment" }).fill("Regular Check-up");

    //click on Book Appointment
    await page.getByRole("button", { name: "Book Appointment" }).click();

    //assertion
    await expect(page.locator("h2")).toContainText("Appointment Confirmation");
  });
});
