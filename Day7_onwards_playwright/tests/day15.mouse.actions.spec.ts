import {test} from "@playwright/test"

test("task1",async({page})=>{
    // await page.goto("https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4");
    // await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2");
    await page.goto("https://demoapps.qspiders.com/ui/?scenario=1");
    // await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0");
    // await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0");
    // await page.goto("https://demoapps.qspiders.com/ui/mouseHover?sublist=0");

    //!click()
    // await page.getByText("Yes").click({button:"right",clickCount:2,force:true});
    
    //!hover()
    // await page.locator("//img[@class='w-5 h-5 mt-5 ml-3 cursor-pointer ']").hover();

    //!down() and up()
    // await page.locator("//div[@id='circle']").hover();
    // await page.mouse.down()
    // await page.waitForTimeout(5000)
    // await page.mouse.up();

    //!dispatchEvent()--> if we dont want to use force
    // await page.locator("//input[@id='submit']").click({force:true})
    // await page.locator("//input[@id='submit']").dispatchEvent("click")

    //!without using dragTo
    // await page.getByText("Mobile Charger").hover();
    // await page.mouse.down();
    // await page.locator("//div[@class='drop-column min-h-[200px] bg-slate-100']").first().hover()
    // await page.mouse.up();
    //!dragTo()
    // await page.getByText("Mobile Charger").dragTo(page.getByText("Mobile Accessories"));
    // await page.getByText("Laptop Charger").dragTo(page.getByText("Laptop Accessories"));
    // await page.getByText("Mobile Cover").dragTo(page.getByText("Mobile Accessories"));
    // await page.getByText("Laptop Cover").dragTo(page.getByText("Laptop Accessories"));

    //!scrollIntoViewIfNeeded()
    // await page.locator("//input[@type='checkbox']").scrollIntoViewIfNeeded()
    // await page.locator("//input[@type='checkbox']").check();
    // await page.waitForTimeout(5000)
    // await page.getByText("Accept Our Policy").click();

    //!keyboardActions
    await page.getByLabel("Name").type("Priyanshu");

    await page.getByLabel("Email Id").fill("srivastavapriyanshusri70@gmail.com");

    await page.keyboard.press("Control+A");
    await page.keyboard.press("Control+C");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Control+V");
    await page.getByText("Register").click();

});