import {test} from "@playwright/test"

import RegisterPage from "../pages/registerPage"
import HomePage from "../pages/homePage"
import LoginPage from "../pages/loginPage"
import SpecialHotPage from "../pages/specialHotPage"


test("Register test_01",async ({page, baseURL}) => {

    await page.goto(`${baseURL}route=account/register`);
    
    
})