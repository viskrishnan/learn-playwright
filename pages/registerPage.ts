import { Page } from "@playwright/test";

export default class RegisterPage{

    constructor(public page: Page) {
        
    }
    async enterFirstName(firstname: string) {
        await this.page.locator("#input-firstname")
        .type(firstname)

    }

    async enterLastName(lastname: string){
        await this.page.locator("#idinput-lastname")
        .type(lastname)
    }

    async enterEmail(email: string){
        await this.page.locator("#input-email")
        .type(email)
    }

    async enterTelephone(telephone: string){
        await this.page.locator("#input-telephone")
        .type(telephone)
    }

    async enterPassword(password: string){
        await this.page.locator("#input-password")
        .type(password)
    }

    async enterConfirmPassword(confrimpassword: string){
        await this.page.locator("#input-confirm")
        .type(confrimpassword)
    }
    
    async isSubscribeChecked(){
        return await this.page.locator("input-newsletter-no");
    }

    async checkTermsandConditions(){
        await this.page.locator("input-agree")
        .click();
    }

    async clickContinue(){
        
        await this.page.locator("//input[@value='Continue']").click()    
    }



}