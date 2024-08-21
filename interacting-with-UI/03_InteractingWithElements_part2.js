const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 500 });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://todomvc.com/examples/react/dist/");

  await page.fill(".new-todo", "Task_1");
  await page.press(".new-todo", "Enter");

  await page.fill(".new-todo", "Task_2");
  await page.press(".new-todo", "Enter");

  const elements = await page.$$(".toggle");
  for (const element of elements) {
    const isChecked = await element.isChecked();
    if (!isChecked) {
      await element.check(); // checking button e.g. radio button
    }
  }

  await browser.close();
})();
