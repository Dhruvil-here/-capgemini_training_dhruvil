
import {expect, test} from "@playwright/test"
//! toHaveTitle()
test("test1",async({page})=>{
     await page.goto("https://www.amazon.com/")
     await expect(page).toHaveTitle("Amazon.com. Spend less. Smile more.");
})

//! toHaveURL()
test("test2",async({page})=>{
     await page.goto("https://www.amazon.com/")
     await expect(page).toHaveURL("https://www.amazon.com/");
})
//!toBeOK()
test("test3",async({page})=>{
     const response=await page.request.get("https://www.amazon.com/")
     await expect(response).toBeOK();
})
//!toHaveScreenShot()

test("test4",async({page})=>{
     await page.goto("https://www.google.com/")
     await expect(page).toHaveScreenshot();
})

//!toContainText();
test("test5",async({page})=>{
     await page.goto("https://www.amazon.in/")
    await expect(page.locator("//a[@href='/gp/sva/dashboard?ref_=nav_cs_apay']")).toContainText("Pay");
})

//!toConatainClass()

test("test6",async({page})=>{
     await page.goto("https://www.amazon.in/")
    await expect(page.locator("button")).toContainClass(["btn","btn","btn","btn"]);
})


