/*
const { Builder, By, Key } = require("selenium-webdriver");

async function example() {
  
  // launch chrome browser then youtube.com

  let driver = await new Builder().forBrowser("chrome").build();
  // await driver.get("https://www.google.com");
  await driver.get("https://www.youtube.com/")

// find the search box type "ganjiSwag" press enter wait for 2 seconds and click on the first video
  let searchBox = await driver.findElement(By.name("search_query"));
  await searchBox.sendKeys("ganjiSwag");
  await searchBox.sendKeys(Key.ENTER);
  // await driver.sleep(2000);
  let videoThumbnails = await driver.findElements(By.id("thumbnail"));
  await videoThumbnails[0].click();
  let currentUrl = await driver.getCurrentUrl();
  console.log(currentUrl);
}

example()
*/

const { Builder, By, Key, until } = require("selenium-webdriver");

async function example() {
  
  // launch youtube in chrome browser

  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://www.youtube.com/")
  await driver.wait(until.elementLocated(By.name("search_query")), 10000);

// find the search box above the search button and type "Selenium WebDriver Tutorial" in it and press enter
  let searchBox = await driver.findElement(By.name("search_query"));
    await searchBox.sendKeys("Selenium WebDriver Tutorial");
    await searchBox.sendKeys(Key.ENTER);

  // close youtube in chrome browser
  await driver.close();
}


example()




