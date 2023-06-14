import { expect, test } from "@playwright/test"

// test("Basic Interactions Test Demo",async ({page}) => {

//     await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
//     const simpleInputField = page.locator("//input[@id='user-message']")
//     await simpleInputField.scrollIntoViewIfNeeded();
//     console.log(await simpleInputField.getAttribute("placeholder"));
//     expect(simpleInputField).toHaveAttribute("placeholder", "Please enter your Message")
//     await page.getByRole('button', { name: 'Get Checked Value' }).click();
//     console.log('Before entering values : ' + await simpleInputField.inputValue())
//     await simpleInputField.type("Hi Krishnan")
//     console.log('After entering values: ' + await simpleInputField.inputValue())
    

//   // ---------------------
//   //await context.close();
//   //await browser.close();
// })


// test("Validating the sum of 2 digits",async ({page}) => {

//   await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
//   const sum1Int = page.locator("#sum1");
//   const sum2Int = page.locator("#sum2");

//   const getValuesBtn = page.locator("//button[normalize-space()='Get Sum']");
//   let num1 = 45;
//   let num2 = 630;

//   await sum1Int.type(" "+ num1);
//   await sum2Int.type(" "+ num2);
//   await getValuesBtn.click();

//   const result = page.locator("#addmessage");

//   console.log(await result.textContent());
//   let expectedResult = num1 + num2;
//   expect(result).toHaveText(" "+ expectedResult);
  
// })


test("Learninga about Checkbox in Playwright",async ({page}) => {
  
  await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
  const singleCheckBox = page.locator("id=isAgeSelected");
  expect(singleCheckBox).not.toBeChecked();
  await singleCheckBox.check();
  expect(singleCheckBox).toBeChecked();



})