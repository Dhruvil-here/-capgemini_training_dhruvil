import {test} from "@playwright/test"

//!WINDOW HANDLING

test("",async({browser})=>{
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto("https://www.flipkart.com/")
    await page.locator("//span[@class='b3wTlE']").click();
    await page.locator('//input[@class="nw1UBF v1zwn25"]').first().fill("shoes");
    await page.locator('//button[@class="XFwMiH"]').first().click();
    const [page2]=await Promise.all([
        page.waitForEvent("popup"),
        page.locator("//img[@class='MZeksS']").first().click()
    ])
     await page2.waitForLoadState();
    // console.log("Page1",page);
    // console.log("Page2",page2)
    console.log("Page1",page.url());
    console.log("Page2",page2.url())
})
test("task2",async({browser})=>{
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto("https://demoapps.qspiders.com/ui/browser?sublist=0")
 
    const [page2]=await Promise.all([
        page.waitForEvent("popup"),
        page.locator("//h2[@class='text-lg font-semibold text-gray-800'][1]/../descendant::button").first().click()
    ])
     await page2.waitForLoadState();
    const text= await page2.locator("//h1[@class='text-3xl font-bold mb-2']").textContent()
    console.log("Text is: ",text);
    
})
test("task3",async({browser})=>{
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto("https://demoapps.qspiders.com/ui/browser/newTab?sublist=1")
 
    const [page2]=await Promise.all([
        page.waitForEvent("popup"),
        page.locator("//h2[@class='text-lg font-semibold text-gray-800'][1]/../descendant::button").first().click()
    ])
     await page2.waitForLoadState();
    const text= await page2.locator("//h1[@class='text-3xl font-bold mb-2']").textContent()
    console.log("Text is: ",text);
    
})
test.only("task4",async({browser})=>{
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.getByPlaceholder("Enter text here").fill("My name is Priyanshu")
    await page.getByPlaceholder("Filename").fill("profile.txt")
    const [download]=await Promise.all([
        page.waitForEvent("download"),
        page.locator("#downloadButton").click()
    ])
    console.log("Downloaded file:",download.suggestedFilename());
    await download.saveAs("./downloada/profile.txt");
})
