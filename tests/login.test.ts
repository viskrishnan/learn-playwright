import { chromium, test } from "@playwright/test"

test("Login test demo", async () => {

   const browser = await chromium.launch({
      headless: false
   });
   const context = await browser.newContext();
   const page = await context.newPage();

   await page.goto("https://ecommerce-playground.lambdatest.io/")
   await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]")
   // await page.click("text=Login")
   await page.click("'Login'")

   await page.fill("//input[@id='input-email']", "krishnans.blr@gmail.com")
   await page.fill("//input[@id='input-password']", "Mypass@123")
   await page.click("//input[@value='Login']");

   await page.waitForTimeout(8000);

   // await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]")
   // await page.click("(//a[@class='icon-left both dropdown-item'])[8]")

   // await page.waitForTimeout(5000)

   // await page.click("a[class='btn btn-primary']")

   // await page.waitForTimeout(8000)

   const newContext = await browser.newContext();

   const newPage = await newContext.newPage();
   await newPage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account")

   await newPage.waitForTimeout(6000);



})