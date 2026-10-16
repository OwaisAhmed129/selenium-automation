const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

const driver = new Builder()
    .forBrowser("chrome")
    .build();

async function runTest() {

// Open a new tab and navigate to the URLs
    await driver.switchTo().newWindow("tab");
    await driver.get("https://www.google.com");

    await driver.switchTo().newWindow("tab");
    await driver.get("https://claude.ai/new");

    await driver.switchTo().newWindow("tab");
    await driver.get("https://goenterprisehr.com");

    
    // Identifyu and print Ids of all opened tabs
{    const allWindows = await driver.getAllWindowHandles();
    console.log(allWindows);
    await driver.switchTo().window(allWindows[2]);
    console.log(await driver.getCurrentUrl());
}


    // Switch to the Google tab and get current url
{   const allWindows = await driver.getAllWindowHandles();
    await driver.switchTo().window(allWindows[1]);
    await driver.get("https://www.google.com");
    console.log(await driver.getCurrentUrl());
}    

    // Verify the current URL is the google url
    const googleCurrentUrl = await driver.getCurrentUrl();
    assert.strictEqual(googleCurrentUrl, "https://www.google.com/");

    // Switch to the GoE tab, get current url and print the url
    const allWindows = await driver.getAllWindowHandles();
    await driver.switchTo().window(allWindows[3]);
    await driver.get("https://goenterprisehr.com");
    console.log(await driver.getCurrentUrl());
    

}

runTest();