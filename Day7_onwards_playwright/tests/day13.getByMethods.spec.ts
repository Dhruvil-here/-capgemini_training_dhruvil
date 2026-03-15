import {test} from "@playwright/test"

//! getByText()
//! getByAltText()
//! getByLabel()
//! getByTitle()
//! getByPlaceholder()
//! getByRole()
//! getByTextId()

test("getByMethods",async({page})=>{

    await page.goto("https://practicetestautomation.com/practice-test-login/")
    // await page.getByLabel("User",{exact:true}).fill("student"); // gives error beacuse it will locate for exact value
    // await page.getByLabel("Password").fill("Password123");
    // await page.getByText("Submit").first().click();
    await page.getByRole("textbox",{name:"username",exact:true}).fill("student")
    await page.getByRole("textbox",{name:"password"}).fill("Password123")
    await page.getByRole("button").click();
    await page.getByText("Log out").click();
    

})