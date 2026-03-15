import {test} from "@playwright/test"

test("task1", async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator("//input[@id='twotabsearchtextbox']").fill("nike")
    await page.locator("//input[@id='nav-search-submit-button']").click();
    const price=page.locator("//span[text()='2,217']");
    console.log(price);
    page.locator("//span[contains(text(),'Mens')]")
})


//!Advanced methods
//? //section[@class="Hello"]/child::div/child::h1
//? //section[@class="hello"]/decendent::(whatever chhild you want write is name here);
//? preceding-sibling:: and following-sibling::
//? parent::(name of the attritbute)

              
test("task2", async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator("//input[@id='twotabsearchtextbox']").fill("nike")
    await page.locator("//input[@id='nav-search-submit-button']").click();
    const price= await page.locator("//span[@aria-hidden='true']/child::span[@class='a-price-whole' and .='2,217']").first().textContent();
   console.log(price);

})
test("task3", async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("//div[@id='form']/descendant::input[@id='username']").fill("student")
    await page.locator("//div[@id='form']/descendant::input[@id='password']").fill("Password123");
    await page.locator("//button[@id='submit']").click();
    console.log("Login Succwssfully");
    

})
test("task4", async({page})=>{
    await page.goto("https://www.flipkart.com/")
    const name=await page.locator("//div[@class='H5bs2Y' and a[@class='SXucWY']]/child::a/child::span").textContent();
   console.log(name);
   
})
test("task5", async({page})=>{
    await page.goto("https://www.flipkart.com/")
    await page.locator("//span[@class='b3wTlE']").click();
    await page.locator("//input[@placeholder='Search for Products, Brands and More']").first().fill("phones")
    await page.locator("//button[@class='XFwMiH']").first().click();
    const price=await page.locator("//div[@class='RG5Slk'  and .='realme P4 Power 5G (TransSilver, 128 GB)/'] ").textContent();

console.log(price);
   
})
test("task6", async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator("//input[@id='twotabsearchtextbox']").fill("phones");

    await page.locator("//input[@id='nav-search-submit-button']").click();
   
    await page.locator("//li[@id='p_n_g-1003517064111/51258733031']/descendant::i").click();
    
   await page.screenshot({path:"./screenshoot/amazon.png"})
})


test("task7", async ({page}) => {
    await page.goto("https://www.flipkart.com/")
    await page.locator("//span[@class='b3wTlE']").click();
    await page.locator('//input[@class="nw1UBF v1zwn25"]').first().fill("phones");
    await page.locator('//button[@class="XFwMiH"]').first().click();

    let details = await page.locator("//div[@class='RG5Slk' and .='Google Pixel 9A (Porcelain, 256 GB)'] | //div[@class='RG5Slk' and .='Google Pixel 9A (Porcelain, 256 GB)']/ancestor::div[@class='jIjQ8S']/descendant::div[@class='hZ3P6w DeU9vF']").allTextContents();

    console.log(details);
})


//? (|) -> this is union operator if you want to fetch both price and name using a single xPath then we use it 
//? allTextContents()-> this method use to fetch all content when using union xpath