import { Page } from "@playwright/test";

export default class HomePage{

    constructor(public page:Page){}

    async clickOnSpecialHotMenu() {
        await this.page.click("(//a[@class='icon-left both nav-link'])[24]")
    }
}