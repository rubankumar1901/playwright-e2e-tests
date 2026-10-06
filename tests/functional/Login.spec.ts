import { test, expect } from "@playwright/test";

test.describe("Login functionality", () => {
  test.beforeEach("Go to login page", async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await expect(page).toHaveTitle("CURA Healthcare Service");
    await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");

    //Make an appointment
    await page.getByRole("link", { name: "Make Appointment" }).click();
    await expect(
      page.getByText("Please Login to make appointment"),
    ).toBeVisible();
  });

  test("Should login with valid credentials", async ({ page }) => {
    // Fill in the login form
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();

    // Assert if the appointment page is loaded
    await expect(page.locator("//h2")).toHaveText("Make Appointment");
  });

  test("Should prevent login with Invalid credentials", async ({ page }) => {
    // Fill in the login form
    await page.getByLabel("Username").fill("John Jeo");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();

    // Assert if the appointment page is loaded
    await expect(page.locator("#login")).toContainText(
      "Login failed! Please ensure the username and password are valid.",
    );
  });
});
