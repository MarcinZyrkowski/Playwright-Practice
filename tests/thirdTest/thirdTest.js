const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('/#/login')
})

// test.use({ viewport: { width: 600, height: 900 } }); // local configuration: only applicable to this file.

test('basic test', async ({ page }) => {
    await expect(page).toHaveTitle('Conduit')
    await page.fill('input[type = "email"]', 'qacamp.acad@gmail.com')
    await page.press('input[type = "email"]', 'Tab')
    await page.type('input[type = "password"]', 'test12345')
    await page.click('form >> "Sign in"')
    const locator = page.locator('.navbar-brand');
    await expect(locator).toContainText('conduit', { timeout: 30000 });
})