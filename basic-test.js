const { Builder, By, until, Select } = require("selenium-webdriver");

    const driver = new Builder()
        .forBrowser("chrome")
        .build();

        async function runTest() {

    // Navigate to the selenium web form
    await driver.get("https://www.selenium.dev/selenium/web/web-form.html");
    console.log("Web form opened successfully");


    // Maximize the browser window
    await driver.manage().window().maximize();
    console.log("Browser window maximized successfully");


    // Wait for the page to load completely
    await driver.wait(until.titleIs("Web form"), 10000);
    console.log("Page loaded successfully");


   // Wait for the text input field to be present
    await driver.wait(
        until.elementLocated(By.css("input[type='text']")),
        10000
    );

    // Find text input field and enter a query
    const textInput = await driver.findElement(By.css("input[type='text']"));
    await textInput.sendKeys("Hello Selenium");


    // Wait for the password input field to be present
    await driver.wait(
        until.elementLocated(By.css("input[type='password']")),
        10000
    );

    // Find Password input field and enter a password
    const passwordInput = await driver.findElement(By.css("input[type='password']"));
    await passwordInput.sendKeys("Password1!");


    // Wait for the textarea input field to be present
    await driver.wait(
        until.elementLocated(By.css("textarea")),
        10000
    );

    // Find Textarea input field and enter a query
    const textareaInput = await driver.findElement(By.css("textarea"));
    await textareaInput.sendKeys("Learning Selenium and exploring testing with selenium is totally fun!");


    // Wait for the select dropdown to be present
    await driver.wait(
        until.elementLocated(By.css("select")),
        10000
    );

    // Find Select dropdown and select an option
    const selectDropdown = await driver. findElement(By.css("select"));
    const select = new Select(selectDropdown);
    await select.selectByVisibleText("Two");


    // Wait for the datalist to be present
    await driver.wait(
        until.elementLocated(By.css("datalist")),
        10000
    );

    // Find Datalist input field and enter a query
    const datalistInput = await driver.findElement(By.css("input[name='my-datalist']"));
    await datalistInput.sendKeys("Chicago");
    await driver.sleep(1500);


    // Wait for the File input to be present
    await driver.wait(
        until.elementLocated(By.css("input[type='file']")),
        10000
    );

    // Find File input field and upload a file
    const fileInput = await driver.findElement(By.css("input[name='my-file']"));
    await fileInput.sendKeys("C:\\Users\\DELL\\Pictures\\Camera Roll\\selfie.jpg");
    await driver.sleep(1500);
    

    // Wait for the default checkbox to be present
   await driver.wait(
    until.elementLocated(By.css("#my-check-2")),
    10000
    );

    // Find default checkbox and click it
    const defaultCheckbox = await driver.findElement(By.css("#my-check-2"));
    await defaultCheckbox.click();
    await driver.sleep(1500);


    // Wait for the default checkbox to be present
    await driver.wait(
    until.elementLocated(By.css("input[type='checkbox']")),
    10000
    );

    // Find checkbox input and click it
    const checkboxInput = await driver.findElement(
    By.css("input[name='my-check']"));
    await checkboxInput.click();
    await driver.sleep(1500);


    // Wait for the default radio button to be present
    await driver.wait(
    until.elementLocated(By.css("#my-radio-2")),
    10000
    );

    // Find default radio button and click it
    const defaultRadiobutton = await driver.findElement(By.css("#my-radio-2"));
    await defaultRadiobutton.click();
    await driver.sleep(1500);


    // Wait for the color picker input to be present
    await driver.wait(
    until.elementLocated(By.css("input[name='my-colors']")),
    10000
    );

    // Find color picker input and select a color
    const colorPickerInput = await driver.findElement(By.css("input[name='my-colors']"));
    await colorPickerInput.sendKeys("#ff00dd");
    await driver.sleep(1500);
    await colorPickerInput.sendKeys("#42b62b");
    await driver.sleep(1500);
    await colorPickerInput.sendKeys("#ee7411");
    await driver.sleep(1500);


    // Wait for the date picker input to be present
    await driver.wait(
    until.elementLocated(By.css("input[name='my-date']")),
    10000
    );

    // Find date picker input and select a date
    const datePickerInput = await driver.findElement(By.css("input[name='my-date']"));
    await datePickerInput.sendKeys("04/26/2006");
    await driver.sleep(1500);

    // Clear the date picker input field and select a new date
    await datePickerInput.clear();
    await datePickerInput.sendKeys("09/13/2026");
    await driver.sleep(1500);


    // Wait for the range input to be present
    await driver.wait(
    until.elementLocated(By.css("input[name='my-range']")),
    10000
    );

    // Find range input and select a value
    const rangeInput = await driver.findElement(By.css("input[name='my-range']"));
    await rangeInput.sendKeys("Key.HOME");
    await driver.sleep(1500);


    // Wait for the submit button to be present
    await driver.wait(
        until.elementLocated(By.css("button[type='submit']")),
        10000
    );

    // Click on the submit button
    const submitButton = await driver.findElement(By.css("button[type='submit']"));
    await submitButton.click();
    await driver.sleep(1500);


    // Wait for the text element to be present after submission
    await driver.wait(
        until.elementLocated(By.css("#message")),
        10000
    );

    // Find text element and get its text
    const textElement = await driver.findElement(By.css("#message"));
    const text = await textElement.getText();
    console.log("Text found:", text);


    // Close the browser
    await driver.quit();
    console.log("Browser closed successfully");
    
}

runTest();


 