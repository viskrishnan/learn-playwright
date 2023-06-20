import { Page } from "@playwright/test";

export default class LoginPage {

    constructor(public page: Page) {}

    async login(email: string ,password: string){
        await this.enterEmailAddr(email)
        await this.enterLoginPassword(password)
        await this.clickLoginButton()
    }

    async enterEmailAddr(emailaddress: string){
        await this.page.locator("#input-email")
        .type(emailaddress)
    }

    async enterLoginPassword(loginPassword: string){
        await this.page.locator("//input[@id='input-password']")
        .type(loginPassword)
    }

    async clickLoginButton(){
        await this.page.locator("input[value='Login']")
        .click()
    }
}