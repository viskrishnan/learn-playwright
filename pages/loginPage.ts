import { Page } from "@playwright/test";

export default class LoginPage {

    constructor(public page: Page) {}

    async enterEmailAddr(emailaddress: string){
        await this.page.locator("#input-email")
        .type(emailaddress)
    }

    async enterLoginPassword(loginPassword: string){
        await this.page.locator("input-password")
        .type(loginPassword)
    }

    async clickLoginButton(){
        await this.page.locator("input[value='Login']")
        .click()
    }
}