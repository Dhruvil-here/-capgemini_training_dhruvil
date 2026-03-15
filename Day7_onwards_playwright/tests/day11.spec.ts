import {test} from "@playwright/test"

test("task1",async({page})=>{
await page.goto("https://www.amazon.in/")
await page.locator("//input[@id='twotabsearchtextbox']").fill("samsung s26 ultra")
await page.locator("//input[@id='nav-search-submit-button']").click();
let value=await page.locator("//span[@class='a-price-whole']").first().innerText();
console.log(value);
})

