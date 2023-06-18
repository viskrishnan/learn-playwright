import {expect, test} from "@playwright/test"

// test("Interact with Windows popups",async ({page}) => {

//     await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo")

//     console.log(page.url())

//     const [newWindow] = await Promise.all([
//         page.waitForEvent("popup"),
//         page.locator("//a[normalize-space()='Follow On Twitter']").click()
//     ]);

//     console.log(newWindow.url());
    
// })

test("Interact with Multiple windows popus",async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo")

    console.log(page.url())

    const [newMultiWindow] = await Promise.all([
        page.waitForEvent("popup"),
        page.locator("#followboth").click()
    ])
    const pages = newMultiWindow.context().pages();
    console.log("Number of pages : " + pages.length);
    
    
})