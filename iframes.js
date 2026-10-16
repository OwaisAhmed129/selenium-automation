const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

const driver = new Builder()
    .forBrowser("chrome")
    .build();

async function runTest() {
    // Get the iframs page
    await driver.get("https://www.selenium.dev/selenium/web/iframes.html");
    const iframe = await driver.findElement(By.css("#iframe1"));
    await driver.switchTo().frame(iframe);
    console.log(await driver.getCurrentUrl());

    // Find email input field and enter and print value
    const emailInput = await driver.findElement(By.css("input[type='email']"));
    await emailInput.sendKeys("john@mailcatcher.com");
    console.log("Email entered successfully !");

    // Verify the email input field current value
    const inputValue = await emailInput.getAttribute("value");
    console.log("Input value:", inputValue);
    
    assert.strictEqual(inputValue, "john@mailcatcher.com");

    // Find number input field and enter value
    const numberInput = await driver.findElement(By.css("input[type='number']"));
    await numberInput.sendKeys("20");

    // Find and Click on Submit button
    const submitButton = await driver.findElement(By.css("input[type='submit']"));
    await submitButton.click();

    // Wait for the text element to appear
    await driver.wait
    (until.elementLocated(By.id("greeting")),
    10000);

    // Find text element and get its text and verify the result
{   const textElement = await driver.findElement(By.id("greeting"));
    const text = await textElement.getText();
    console.log("Text found:", text);

    assert.strictEqual(text, "Success!");
}    
    await driver.switchTo().defaultContent();

    // Find the main page heading
    const pageHeading = await driver.findElement(By.id("iframe_page_heading"));
    const text = await pageHeading.getText();
    console.log("Text found:", text);

    assert.strictEqual(text, "This is the heading");

    
}

runTest();