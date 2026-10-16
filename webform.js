const { Builder, By, until, Select, Key } = require("selenium-webdriver");
const assert = require("assert");
const console = require("console");

    const driver = new Builder()
        .forBrowser("chrome")
        .build();

        async function runTest() {

            await driver.get("https://www.selenium.dev/selenium/web/iframes.html");
            const iframe = await driver.findElement(By.css("#iframe1"));
            await driver.switchTo().frame(iframe);
             // iframe practice continues here



    // Navigate to the selenium web form
    await driver.get("https://www.selenium.dev/selenium/web/web-form.html");
    console.log("Web form opened successfully");


    // Maximize the browser window
    await driver.manage().window().maximize();
    console.log("Browser window maximized successfully");


    // Get the current url of the existing page
{    const currentUrl = await driver.getCurrentUrl();
    console.log("URL retrieved:", currentUrl);
    assert.strictEqual(currentUrl,"https://www.selenium.dev/selenium/web/web-form.html");
}    

    // Wait for the page to load completely
    await driver.wait(until.titleIs("Web form"), 10000);
    console.log("Page loaded successfully");

    
    // Verify that the page title is correct - Ass 01
    const pageTitle = await driver.getTitle();
    console.log("Page title found:", pageTitle);

    if (pageTitle === "Web form") { 
        console.log("Pass"); 
    }
    else {
        console.log("Fail"); 
    }


   // Wait for the text input field to be present
    await driver.wait(
        until.elementLocated(By.css("input[type='text']")),
        10000
    );

    // Find text input field and enter a query
{   const textInput = await driver.findElement(By.css("input[type='text']"));
    await textInput.sendKeys("Hello Selenium");
}

    // Verify that the text input field has a text "Hello Selenium" - Ass 02
{   const textInput = await driver.findElement(By.css("input[type='text']"));
    const inputValue = await textInput.getAttribute("value");
    console.log("Input value: Hello Selenium");
    
    assert.strictEqual(inputValue, "Hello Selenium");
}

    // Clear the text input field and enter a query
    const textInput = await driver.findElement(By.css("input[type='text']"));
    await textInput.clear();
    
    // Press Enter key
    /*await textInput.sendKeys("Selenium Automation",Key.ENTER);*/

    // Keyboard actions
    await textInput.sendKeys("Selenium Automation",Key.TAB);
    await driver.sleep(1000);
    await textInput.sendKeys(Key.BACK_SPACE);
    await textInput.sendKeys(Key.HOME);
    await textInput.sendKeys(Key.DELETE);



    // Verify the text input field's current value
    const inputValue = await textInput.getAttribute("value");
    console.log("Input value: elenium Automatio");

    assert.strictEqual(inputValue, "elenium Automatio");
    
    
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
    await selectDropdown.sendKeys(Key.ARROW_DOWN);
    await driver.sleep(1000);
    await selectDropdown.sendKeys(Key.ARROW_DOWN);
    await driver.sleep(1000);
    await selectDropdown.sendKeys(Key.ARROW_DOWN);
    await driver.sleep(1000);
    await selectDropdown.sendKeys(Key.ARROW_UP);
    
    /*const select = new Select(selectDropdown);
    await select.selectByVisibleText("Two");*/
    


    // Wait for the datalist to be present
    await driver.wait(
        until.elementLocated(By.css("datalist")),
        10000
    );

    // Find Datalist input field and enter a query
    const datalistInput = await driver.findElement(By.css("input[name='my-datalist']"));
    await datalistInput.sendKeys("Chicago");
    await driver.sleep(1000);


    // Wait for the File input to be present
    await driver.wait(
        until.elementLocated(By.css("input[type='file']")),
        10000
    );

    // Find File input field and upload a file
    const fileInput = await driver.findElement(By.css("input[name='my-file']"));

    // Create a test alert
{    await driver.executeScript("alert('Are you sure you want to continue?');");
    const alert = await driver.switchTo().alert();
    await driver.sleep(1500);
    
    const message = await alert.getText();
    assert.strictEqual(message, "Are you sure you want to continue?");
    await alert.accept();
    
    await fileInput.sendKeys("C:\\Users\\DELL\\Pictures\\Camera Roll\\selfie.jpg",Key.ESCAPE);
    await driver.sleep(1000);
}

    // Wait for the default checkbox to be present
   await driver.wait(
    until.elementLocated(By.css("#my-check-2")),
    10000
    );

    // Find default checkbox and click it
    const defaultCheckboxForClick = await driver.findElement(By.css("#my-check-2"));
    await defaultCheckboxForClick.click();
    await driver.sleep(1000);

    // Verify that the default checkbox is selected - Ass 03
    const defaultCheckbox = await driver.findElement(By.css("#my-check-2"));
    const isDefaultCheckboxSelected = await defaultCheckbox.isSelected();
    console.log("Default checkbox selected", isDefaultCheckboxSelected);

    if (isDefaultCheckboxSelected) {
        console.log("Pass");
    }
    else {
        console.log("Fail");
    }


    // Wait for the checkbox to be present
    await driver.wait(
    until.elementLocated(By.css("input[type='checkbox']")),
    10000
    );

    // Find checkbox input and unselect it
{
    const checkboxInputForClick = await driver.findElement(By.css("input[name='my-check']"));
    await checkboxInputForClick.click();
    await driver.sleep(1000);

    // Verify that the checkbox is unchecked - Ass 04
    const CheckboxInput = await driver.findElement(By.css("input[name='my-check']"));
    const isCheckboxInputSelected = await CheckboxInput.isSelected();
    console.log("Checkbox selected", isCheckboxInputSelected);

    if (!isCheckboxInputSelected) {
        console.log("Yes, Checkbox is unchecked");
    }

    else {
        console.log("No, Checkbox is checked");
    }
}

    // Select checkbox input again and verify its selection - Ass 05
{
    const CheckboxInput = await driver.findElement(By.css("input[name='my-check']"));
    await CheckboxInput.click();
    await driver.sleep(1000);

    const checkboxInput = await driver.findElement(By.css("input[name='my-check']"));
    const isCheckboxInputSelected = await checkboxInput.isSelected();
    console.log("Checkbox selected", isCheckboxInputSelected);

    if (isCheckboxInputSelected) {
        console.log("Pass");
    }

    else {
        console.log("Fail");
    }
}

    
    // Wait for the radio button to be present
    await driver.wait(
    until.elementLocated(By.css("input[name='my-radio']")),
    10000
    );

    // Find radio button and check whether it is selected or not - Ass 06
{  const radiobutton = await driver.findElement(By.css("input[name='my-radio']"));
    const isRadioButtonSelected = await radiobutton.isSelected();
    console.log("Radio button selected", isRadioButtonSelected);

    if (isRadioButtonSelected) {
        console.log("Pass");
    }
    else {
        console.log("Fail");
    }
}

    // Wait for the default radio button to be present
    await driver.wait(
    until.elementLocated(By.css("#my-radio-2")),
    10000
    );

    // Find default radio button and click it
    const defaultRadiobutton = await driver.findElement(By.css("#my-radio-2"));
    await defaultRadiobutton.click();
    await driver.sleep(1000);

    // Verify that the default radio button is selected - Ass 07
    const defaultRadioButton = await driver.findElement(By.css("#my-radio-2"));
    const isDefaultRadioButtonSelected = await defaultRadioButton.isSelected()
    console.log("Default radio button selected", isDefaultRadioButtonSelected);

    if (isDefaultRadioButtonSelected) {
        console.log("Pass");
    }
    else {
        console.log("Fail");
    }


    // Verify that the radio button is unselected after selecting the default radio button - Ass 08
{   const radiobutton = await driver.findElement(By.css("input[name='my-radio']"));
    const isRadioButtonSelected = await radiobutton.isSelected();
    console.log("Radio button selected", isRadioButtonSelected);

    if (!isRadioButtonSelected) {
        console.log("Yes, Radio button is unselected");
    }

    else {
        console.log("No, Radio button is still selected");
    }
}


    // Select radio button again and verify it
    const radiobutton = await driver.findElement(By.css("input[name='my-radio']"));
    await radiobutton.click();
    await driver.sleep(1000);

    const isRadioButtonSelected = await radiobutton.isSelected();
    console.log("Radio button selected", isRadioButtonSelected);

    if (isRadioButtonSelected) {
        console.log("Pass");
    }
    else {
        console.log("Fail");
    }


    // Wait for the color picker input to be present
    await driver.wait(
    until.elementLocated(By.css("input[name='my-colors']")),
    10000
    );

    // Find color picker input and select a color
    const colorPickerInput = await driver.findElement(By.css("input[name='my-colors']"));
    await colorPickerInput.sendKeys("#ff00dd");
    await driver.sleep(1000);
    await colorPickerInput.sendKeys("#42b62b");
    await driver.sleep(1000);
    await colorPickerInput.sendKeys("#ee7411");
    await driver.sleep(1000);


    // Wait for the date picker input to be present
    await driver.wait(
    until.elementLocated(By.css("input[name='my-date']")),
    10000
    );      

    // Find date picker input and select a date
    const datePickerInput = await driver.findElement(By.css("input[name='my-date']"));
    
    // Test browser prompt
{   await driver.executeScript(
    "setTimeout(() => prompt('What is your name?'), 1000);"
    );

    await driver.sleep(1500);

    
    const prompt = await driver.switchTo().alert();
    const message = await prompt.getText();

    assert.strictEqual(message, "What is your name?");

    await prompt.sendKeys("Owais");
    await driver.sleep(2000);   
    await prompt.accept();
}   
    await datePickerInput.sendKeys("04/26/2006");
    await driver.sleep(1500);

    // Clear the date picker input field and select a new date
    await datePickerInput.clear();
    await datePickerInput.sendKeys("09/26/2026");
    await driver.sleep(1000);


    // Wait for the range input to be present
    await driver.wait(
    until.elementLocated(By.css("input[name='my-range']")),
    10000
    );

    // Find range input and select a value
    const rangeInput = await driver.findElement(By.css("input[name='my-range']"));
    await rangeInput.sendKeys("Key.HOME");
    await driver.sleep(1000);

    
    // Wait for the submit button to visible   
{   const textElement = await driver.findElement(By.css("button[type='submit']"));
    
    await driver.wait(
    until.elementIsVisible(textElement),
    10000
);
}
    

    // Wait for the submit button to be present
    await driver.wait(
    until.elementLocated(By.css("button[type='submit']")),
    10000
);

    //Verify that the submit button is present - Ass 09
    const submitButtonPresent = await driver.findElement(By.css("button[type='submit']"));
    const isSubmitButtonPresent = await submitButtonPresent.isDisplayed();
    console.log("Submit button found:", isSubmitButtonPresent);

    assert.strictEqual(isSubmitButtonPresent, true);

    
    // Verify that the Submit button has type="submit" - Ass 10
    const submitButton = await driver.findElement(By.css("button[type='submit']"));
    const buttonValue = await submitButton.getAttribute("type");
    console.log("Button type:", buttonValue);

    if (buttonValue === "submit") {
        console.log("Pass");
    }
    else {
        console.log("Fail");
    }


    // Wait for the submit button to be enabled
{    const enabledSubmitButton = await driver.findElement(By.css("button[type='submit']"));
    await driver.wait(
        until.elementIsEnabled(enabledSubmitButton),
        10000
    );
}


    // Verify that the submit button is enabled - Ass 11
    const enabledSubmitButton = await driver.findElement(By.css("button[type='submit']"));
    const isButtonEnabled = await enabledSubmitButton.isEnabled();
    console.log("Submit button enabled:", isButtonEnabled);

    if (isButtonEnabled) {
        console.log("Pass");
    }
    else {
        console.log("Fail");
    }


    // Click on the submit button gets an confirmation popup then submit the form according to the condition 
    const submitButtonForClick = await driver.findElement(By.css("button[type='submit']"));
    await driver.executeScript("confirm('Are you sure you want to continue?');");
    
    /* const ok = await driver.executeScript("return confirm('Are you sure you want to continue?');"); */
    
    const confirm = await driver.switchTo().alert();
    await driver.sleep(1000);
                                                                                                                    
    const message = await confirm.getText();
    assert.strictEqual(message, "Are you sure you want to continue?");
    await confirm.accept();

    await submitButtonForClick.click();
    await driver.sleep(1000);
    
/*  if (ok) {
    await submitButtonForClick.click();
    await driver.sleep(1000);

} 
    else {
    console.log("Cancel button clicked !");
}
*/

    // Get URL after the form submission
    const currentUrl = await driver.getCurrentUrl();
    console.log("URL fetched:", currentUrl);

    assert.strictEqual(currentUrl,"https://www.selenium.dev/selenium/web/submitted-form.html?my-text=Hello+Selenium&my-password=Password1%21&my-textarea=Learning+Selenium+and+exploring+testing+with+selenium+is+totally+fun%21&my-readonly=Readonly+input&my-select=2&my-datalist=Chicago&my-file=selfie.jpg&my-check=on&my-check=on&my-radio=on&my-colors=%23ee7411&my-date=09%2F26%2F2026&my-range=5&my-hidden=");


    // Wait for the text element to be present after submission
    await driver.wait(
        until.elementLocated(By.css("#message")),
        10000
    );


    // Find text element and get its text - Ass 11
    const textElement = await driver.findElement(By.css("#message"));
    const text = await textElement.getText();
    console.log("Text found:", text);

    if (text === "Received!") { 
        console.log("Pass"); 
    }
    else {
        console.log("Fail"); 
    }   


    // Minimize the browser window
    await driver.manage().window().minimize();
    console.log("Browser window minimized successfully");


    // Close the browser
    await driver.quit();
    console.log("Browser closed successfully");

    
}

    runTest();
