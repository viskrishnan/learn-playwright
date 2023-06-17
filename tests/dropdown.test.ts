import { expect, test } from "@playwright/test";

test("handling dropdown",async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("#select-demo", {
        //label: "Wednesday"
        //value: "Wednesday"
        index: 5
    })

    await page.selectOption("#multi-select", [{
        label: "Texas"
    
    },{
        index : 2
    },{
        value: "Washington"
    }
    ])

    // await page.click("#printAll");
    // const simpleInputField = page.locator("//span[@class='groupradiobutton block break-words']");
    // await simpleInputField.scrollIntoViewIfNeeded();
    // expect(simpleInputField).toHaveText("Washington")
    
})

test.only("Bootstrap dropdown",async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo")
    await selectCountry("India");
    await selectCountry("Denmark")
    await selectCountry("Australia")


     async function selectCountry(countryName) {
        await page.click("#country+span");
        await page.locator("ul#select2-country-results")
        .locator("li", {
            hasText: countryName

        }).click();
        
    }
})