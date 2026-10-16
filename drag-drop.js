const { Builder, By, until, Select, Key, Actions } = require("selenium-webdriver");

const assert = require("assert");
const { text } = require("stream/consumers");

const driver = new Builder()
    .forBrowser("chrome")
    .build();

async function runTest() {
    // Open the "The Internet — Drag and Drop" page
    await driver.get("https://the-internet.herokuapp.com/drag_and_drop");

    // Locate box A & B then drag box A and drop onto box B
    
{   const boxA = await driver.findElement(By.id("column-a"));
    const boxB = await driver.findElement(By.id("column-b"));
    await driver.actions()
    .move({ origin: boxA })
    .press()
    .move({ origin: boxB, duration: 5000 })
    .release()
    .perform();
    console.log("Box positions change/swap due to drag & drop");
}    
    // Assert the current heading of the boxes after drag-and-drop or
    const boxA = await driver.findElement(By.id("column-a"));
    const headingA = await boxA.getText();
    console.log("Box A heading:", headingA);
    assert.strictEqual(headingA,"B");

    const boxB = await driver.findElement(By.id("column-b"));
    const headingB = await boxB.getText();
    console.log("Box B heading:", headingB);
    assert.strictEqual(headingB,"A");



    /*
    await driver.actions()
    .dragAndDrop(boxA, boxB)
    .perform();
    */
    




}
runTest();