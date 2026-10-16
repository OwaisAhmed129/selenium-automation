const { Builder, By, until, Select, Key, Actions } = require("selenium-webdriver");

const assert = require("assert");
const { text } = require("stream/consumers");

const driver = new Builder()
    .forBrowser("chrome")
    .build();

async function runTest() {
    // Get "The Internet-Hovers" page
    await driver.get("https://the-internet.herokuapp.com/hovers");

    // Find first image and hovers on it
    const firstImage = await driver.findElement(By.css(".figure img"));
    await driver.sleep(1000);
    const actions = driver.actions();
    await actions.move({ origin: firstImage }).perform();
    await driver.sleep(1000);

    // Get the hovered text
    const heading = await driver.findElement(By.css("h5"));
    const text = await heading.getText();
    console.log("Hoverd text found");

    assert.strictEqual(text, "name: user1");
    







}
runTest();