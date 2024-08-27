const { test, expect } = require("@playwright/test");

// basic test - test name
test("basic test", async ({ page }) => {
  await page.goto("https://react-redux.realworld.io/#/login");
  const title = await page.title();
  expect(title).toBe("Conduit");

  await page.fill('input[type = "email"]', "qacamp.acad@gmail.com");
  await page.press('input[type = "email"]', "Tab");
  await page.type('input[type = "password"]', "test12345");
  await page.click('form >> "Sign in"');
  const logoText = await page.$eval(".navbar-brand", (el) => el.innerText);
  expect(logoText).toBe("conduit");
});
