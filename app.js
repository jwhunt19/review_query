const {Builder, By, Key, until} = require('selenium-webdriver');

async function scrapeShopify(query) {
  let driver;
  const stores = [];
  
  try {
    console.log('connecting...')  
    driver = await new Builder().usingServer('http://selenium:4444/wd/hub').forBrowser('chrome').build();
    // driver = await new Builder().forBrowser('chrome').build();
    // console.log('connected');
    await driver.get('https://apps.shopify.com/subscription-payments/reviews');
    console.log(await driver.getCurrentUrl());

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
    const result = stores.filter(store => store.toLowerCase().includes(query));

    console.log('search result', result);
    await driver.quit();
  }
};

module.exports = {
  scrapeShopify
}