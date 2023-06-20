import {expect, test} from "@playwright/test"

import RegisterPage from "../pages/registerPage"
import HomePage from "../pages/homePage"
import LoginPage from "../pages/loginPage"
import SpecialHotPage from "../pages/specialHotPage"


const newEmail = "krishnansubramanian007@gmail.com"
const Password = "pass@123"
test("Register test_01",async ({page, baseURL}) => {
    const register = new RegisterPage(page);
    await page.goto(`${baseURL}route=account/register`);
    await register.enterFirstName("Krishnan")
    await register.enterLastName("Subramanian")
    await register.enterEmail(newEmail)
    await register.enterTelephone("8787878787")
    await register.enterPassword(Password)
    await register.enterConfirmPassword(Password)
    expect(register.isSubscribeChecked())
    await register.checkTermsandConditions()
    await register.clickContinue();

    
})