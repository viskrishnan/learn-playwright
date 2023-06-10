import { expect, test } from "@playwright/test"

test("Basic Interactions Test Demo",async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
    const simpleInputField = page.locator("//input[@id='user-message']")
    console.log(await simpleInputField.getAttribute("placeholder"))
    expect(simpleInputField).toHaveAttribute("placeholder", "Please enter your Message")
    await page.getByRole('button', { name: 'Get Checked Value' }).click();
    

  // ---------------------
  //await context.close();
  //await browser.close();
})