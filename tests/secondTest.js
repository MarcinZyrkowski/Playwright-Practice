const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("https://react-redux.realworld.io/#/login");
});

test("basic test", async ({ page }) => {
  await expect(page).toHaveTitle("Conduit");

  expect(await page.screenshot()).toMatchSnapshot("SignIn.png", {
    threshold: 0.2,
  });

  await page.fill('input[type = "email"]', "qacamp.acad@gmail.com");
  await page.press('input[type = "email"]', "Tab");
  await page.type('input[type = "password"]', "test12345");
  await page.click('form >> "Sign in"');
  const locator = page.locator(".navbar-brand");
  await expect(locator).toContainText("conduit", { timeout: 30000 });
});

test("login test", async ({ page }) => {
  await expect(page).toHaveTitle("Conduit");

  await page.fill('input[type = "email"]', "qacamp.acad@gmail.com");
  await page.press('input[type = "email"]', "Tab");
  await page.type('input[type = "password"]', "test12345");
  await page.click('form >> "Sign in"');
  const locator = page.locator(".navbar-brand");
  await expect(locator).toContainText("conduit", { timeout: 30000 });
});
