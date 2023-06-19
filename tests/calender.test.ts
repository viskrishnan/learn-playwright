import {expect, test} from "@playwright/test"
import moment from "moment"

test("validate calender tests",async ({page}) => {

    page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo")
    let date = "2016-05-03";

    await page.fill("id=birthday", date)
})

test("validate start date and end date",async ({page}) => {

    page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo")
    await page.locator("//input[@placeholder='Start date']").click();

    const thisMonth = moment(dateToSelect, "")
})