const { chromium } = require("playwright");
const expect = require("expect");

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  /* setting viewport
  const context = await browser.newContext({
    viewport: { width: 1600, height: 1200 },
  });
  */

  /* setting locale
  const context = await browser.newContext({
    locale: 'de-DE',
  });
  */

  /* setting permissions
  const context = await browser.newContext({
    permissions: ["geolocation"],
  });
  */

  const page = await context.newPage();

  await page.goto("https://page-url");

  await browser.close();
})();
