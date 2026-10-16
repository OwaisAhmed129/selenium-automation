const { Builder, By, until, Select, Key, Actions }  = require("selenium-webdriver");

const assert = require("assert");
const { text } = require("stream/consumers");


const driver = new Builder()
    .forBrowser("chrome")
    .build();

async function runTest() {
    // Open "Test Automation Practice" page
    await driver.get("https://testautomationpractice.blogspot.com");
    
    // Locate the "Copy Text" button and double click it
    const copyText = await driver.findElement(By.css("#HTML10 > div.widget-content > button"));
    await driver.actions().doubleClick(copyText).perform();

    // Locate "Field2" and retrieve its current value
    const field2 = await driver.findElement(By.id("field2"));
    const inputValue = await field2.getAttribute("value");
    console.log("Input value: Hello World!");

    assert.strictEqual(inputValue,"Hello World!");

    // Move to new tab and open the "The Internet — Context Menu" page
    await driver.switchTo().newWindow("tab");
    await driver.get("https://the-internet.herokuapp.com/context_menu");
    
    // Locate the border style box and right click on the box
    const contextMenu = await driver.findElement(By.css("#hot-spot"));
    await driver.actions().contextClick(contextMenu).perform();
    await driver.switchTo().alert().accept();
    console.log("Clicked OK");

    
}
runTest();
