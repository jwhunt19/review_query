const {Builder, By, Key, until} = require('selenium-webdriver');

(async function helloSelenium() {
  let driver;
  const stores = [];

  try {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://apps.shopify.com/subscription-payments/reviews');

    const scrape = async ()  => {
      elements = await driver.findElements(By.css('h3.review-listing-header__text'))

      for (let i = 0; i < elements.length; i++) {
        let s = await elements[i].getText();
        stores.push(s);
      }
      
    }

    while (driver.findElement(By.css('a.search-pagination__next-page-text'))) {
      await scrape()
      await driver.findElement(By.css('a.search-pagination__next-page-text')).click()
    }

  } finally {
    console.log(stores.length)
    await driver.quit();
  }
})();