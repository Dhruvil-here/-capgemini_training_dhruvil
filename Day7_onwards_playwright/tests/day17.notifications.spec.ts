import {test} from '@playwright/test'

test("notifications",async({browser})=>{
    const context=await browser.newContext({permissions:["notifications"]})
    // await context.grantPermissions(["notifications"])
    const page=await context.newPage()
    await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
    await page.locator("//button[@id='browNotButton']").click();
    const response=await page.evaluate(()=>{
    return Notification.requestPermission()
    })
    console.log(response);
    

}) 