const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

const driver = new Builder()
    .forBrowser("chrome")
    .build();

async function runTest() {
    // Get the dynamic page 
    await driver.get("https://www.selenium.dev/selenium/web/dynamic.html");

    // Find the "Add a box!" button click it
    const addABoxButton = await driver.findElement(By.id("adder"));
    await addABoxButton.click();

    // Wait for the red box to appear
    await driver.wait 
    (until.elementLocated(By.id("box0")),
    10000);

    // Find the newly created box and verify its appearance
    const redBox = await driver.findElement(By.id("box0"));
    const boxValue = await redBox.isDisplayed();

    console.log("Box is displayed:", boxValue);
    assert.strictEqual(boxValue, true);

    // Find the "Reveal a new input" button and click it
    const revealInputButton = await driver.findElement(By.id("reveal"));
    await revealInputButton.click();

    // Find text input field
    const textInput = await driver.findElement(By.css("#revealed"));

    // Wait for the input field to appear
    await driver.wait 
    (until.elementIsVisible(textInput),
    10000);
    
    // Verify text input field appearance
    const isTextInputDisplayed = await textInput.isDisplayed();
    console.log("Text input field is displayed:", isTextInputDisplayed);
    assert.strictEqual(isTextInputDisplayed, true);

    // Enter query in text input field
{   const textInput = await driver.findElement(By.css("#revealed"));
    await textInput.sendKeys("Automating dynamic elements");
}


}

runTest();
