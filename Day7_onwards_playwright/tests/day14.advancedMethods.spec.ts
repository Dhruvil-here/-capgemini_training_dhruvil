import { test } from "@playwright/test";
// test.use({actionTimeout:20000})
//!type keyword is used to enter the value in the input field and fill is used to clear the existing value and then enter the new value in the input field.
// test("web elements", async ({page}) => {
//     await page.goto("https://www.saucedemo.com/")
//     await page.getByTestId("username").type("standard_user");
//     await page.getByTestId("password").fill("secret_sauce");
//     await page.getByTestId("login-button").click();
// })


//! Updating the existing value in the input field using type and fill method.
// test("web elements", async ({page}) => {
//     await page.goto("https://www.saucedemo.com/")
//     await page.getByTestId("username").type("standard_user");
//     await page.getByTestId("username").type("standard_user1");
//     await page.getByTestId("password").fill("secret_sauce1");
//     await page.getByTestId("password").fill("secret_sauce");
//     await page.getByTestId("login-button").click();
// })
//? In the above code, we have used type method to enter the value in the input field and then we have used type method again to update the existing value in the input field.
//? Similarly, we have used fill method to clear the existing value and then enter the new value in the input field.
//? But the diff is that in type method, we have to use type method again to update the existing value in the input field, 
//? whereas in fill method, we can directly use fill method to clear the existing value and then enter the new value in the input field.

//! inputValue is used to get the value from the input field and textContent is used to get the text from the element.



//! .all() method is used to get all the elements that match the locator and then we can perform the action on all the elements at once.
test("web elements", async ({page}) => {
    await page.goto("https://www.amazon.com/")
    await page.locator("//input[@id='twotabsearchtextbox']").fill("shoes",{timeout:2000});
    await page.locator("//input[@id='nav-search-submit-button']").click();

    await page.locator("//span[@class='a-price-whole']").waitFor();

    let ele=await page.locator("//span[@class='a-price-whole']").all()

    console.log(ele);
})
test("web elements set default", async ({page}) => {
    await page.goto("https://www.amazon.com/")
    // page.setDefaultTimeout(20000)
    await page.locator("//input[@id='twotabsearchtextbox']").fill("shoes");
    await page.waitForTimeout(3000);
    await page.locator("//input[@id='nav-search-submit-button']").click();

    await page.locator("//span[@class='a-price-whole']").waitFor();

    let ele=await page.locator("//span[@class='a-price-whole']").all()

    console.log(ele);
})