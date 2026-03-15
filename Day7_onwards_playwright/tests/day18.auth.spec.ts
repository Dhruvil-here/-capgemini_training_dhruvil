import {test} from '@playwright/test'

test("",async({browser})=>{
   let context = await browser.newContext({httpCredentials:{username:"admin",password:"admin"}})
    let page = await context.newPage()
    await page.goto("https://the-internet.herokuapp.com/basic_auth")
    await page.waitForTimeout(3000)
}) 