import {test} from "@playwright/test"

test("Download files",async ({page}) => {
  
    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo")
    await page.type("#textbox", "like share comment and subscribe")
    await page.click("#create")

    const [downloadFile] = await Promise.all([
        page.waitForEvent("download"),
        page.click("#link-to-download")
    ])
    const fileName = await downloadFile.suggestedFilename();
    downloadFile.saveAs(fileName)
})