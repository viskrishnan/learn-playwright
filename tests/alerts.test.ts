import {expect, test} from "@playwright/test"

test("handling alerts",async ({page}) => {
    
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    // page.on("dialog",async (myAlert) => {
    //     const text = myAlert.message();
    //     console.log(myAlert);
    //     await myAlert.accept();
        
    // })
    // await page.locator("button:has-text('Click Me')").nth(0).click();

    // page.on("dialog",async (myAlert) => {
    //     const text = myAlert.message();
    //     console.log(myAlert);
    //     await myAlert.dismiss();
        
    // })
    // await page.locator("button:has-text('Click Me')").nth(1).click();
    // expect(page.locator("id=confirm-demo")).toContainText('Cancel');


    page.on("dialog",async (myAlert) => {
        const text = myAlert.defaultValue();
        console.log(myAlert);
        await myAlert.accept("Krishnan");
        
    })
    await page.locator("button:has-text('Click Me')").nth(2).click();
    expect(page.locator("id=prompt-demo")).toContainText('Krishnan');


})