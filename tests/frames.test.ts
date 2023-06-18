import { expect, test } from "@playwright/test";

test("Interact with frames",async ({page}) => {
    
    await page.goto("https://letcode.in/frame")
    const allFrames = page.frames();
    console.log("No. of frames:  "+ allFrames.length);

    const myFrame = page.frame("firstFr");
    // if (myFrame != null){
    //     await myFrame.fill("", "")
    // }
    await myFrame?.fill("input[name='fname']", "Krishnan")
    await myFrame?.fill("input[name='lname']", "Subramanian")


    const innerFrame = myFrame?.frameLocator("iframe[src='innerFrame']")
    await innerFrame?.locator("input[name='email']").fill("krishnans.blr@gmail.com")

    await myFrame?.fill("input[name='lname']", "Subr")



})