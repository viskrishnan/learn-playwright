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
    //expect(register.isSubscribeChecked())
    await register.checkTermsandConditions()
    await register.clickContinue();
})

test("Add to cart test_02",async ({page,baseURL}) => {
    const login = new LoginPage(page);
    await page.goto(`${baseURL}route=account/login`)
    await login.enterEmailAddr(newEmail)
    await login.enterLoginPassword(Password)
    await login.clickLoginButton()
    expect(await page.title()).toBe("My Account")
})

test("Add to cart test_03",async ({page,baseURL}) => {

    const login = new LoginPage(page)
    const homePage = new HomePage(page)
    const specialHotPage = new SpecialHotPage(page)
    await page.goto(`${baseURL}route=account/login`)
    await login.login(newEmail,Password)
    await homePage.clickOnSpecialHotMenu();
    await specialHotPage.addFirstProductToCart()
    const isCartVisible = await specialHotPage.isToastVisible()
    expect(isCartVisible).toBeVisible()


    
})