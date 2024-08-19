// script code should be in arrow function
const {chromium} = require('playwright');

(async () => {
  // by default playwright works in headless mode, if we want to turn it off, we need to set flag headless to false
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // we can instantiate page in this way. but only for single page and simple scripts
  // const page = browser.newPage()

  await page.goto("https://todomvc.com/examples/react/dist/");
  await page.screenshot({ path: `resources/01_screenshot.png` });
  await browser.close();
})();