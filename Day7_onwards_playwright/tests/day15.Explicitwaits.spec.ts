import {test} from "@playwright/test"

test("task1",async({page})=>{
    await page.goto("https://www.amazon.com/")
    await page.locator("//a[@href='/Amazon-Video/b/?ie=UTF8&node=2858778011&ref_=nav_cs_prime_video']").waitFor({timeout:10000,state:"detached"});
    await page.waitForSelector("//a[@href='/Amazon-Video/b/?ie=UTF8&node=2858778011&ref_=nav_cs_prime_video']");
    await page.locator("//a[@href='/Amazon-Video/b/?ie=UTF8&node=2858778011&ref_=nav_cs_prime_video']").click();
})
test("task12",async({page})=>{
    await page.goto("https://www.flipkart.com/")
    await page.locator("//span[@class='b3wTlE']").click();
    await page.locator('//input[@class="nw1UBF v1zwn25"]').first().fill("phones");
    await page.locator('//button[@class="XFwMiH"]').first().click();
    await page.locator("//a[@class='k7wcnx']").first().click()
    // await Promise.all([page.waitForNavigation(),
    //  page.locator("//a[@class='k7wcnx']").first().click()])
     
    const price=await page.locator("//div[@class='_1psv1zeb9 _1psv1ze0 _1psv1ze2u _1psv1ze9x _1psv1ze7o _1psv1ze5f']/child::a[@class='_1psv1zeb9 _1o6mltljo']/descendant::div[@class='_1psv1zeb9 _1psv1ze0']/descendant::div[6]/descendant::div").textContent()
    console.log(price);
})

test.only("task3",async({browser})=>{
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto("https://www.flipkart.com/")
    await page.locator("//span[@class='b3wTlE']").click();
    await page.locator('//input[@class="nw1UBF v1zwn25"]').first().fill("shoes");
    await page.locator('//button[@class="XFwMiH"]').first().click();
    let [page2] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("//img[@class='MZeksS']").first().click()
    ]);
    await page2.waitForLoadState();
    console.log("Page1",page.url());
    console.log("Page2",page2.url());
})

test("task4",async({page})=>{
    
})
