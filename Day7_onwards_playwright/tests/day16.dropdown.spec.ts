import {test} from "@playwright/test"

test("standard dropdown",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")

    //!selectOption
    // await page.locator("//select[@id='country_code']").selectOption({value:"+91"})
    await page.locator("//select[@id='country_code']").selectOption({label:"+01"})
    await page.locator("//input[@id='phone']").fill("6394226160")
    await page.locator("#male").check();
    await page.locator("#select3").selectOption({label:"India"})
    await page.locator("#select5").selectOption({label:"Uttar Pradesh"})
    await page.locator("//label[@for='cities']/../child::select").selectOption({label:"Lucknow"})

   
})
test("MultiSelect",async({page})=>{
    //!multiple select option-> use selectOption only but use array as parameter to multi select
    await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")
    await page.locator("#select-multiple-native").selectOption([{value:"Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED "},{value:"BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats"},{index:5}])
    await page.locator("//button[@class='bg-orange-500 p-2 text-white rounded w-[150px]']").click();
})
test(".all",async({page})=>{
    await page.goto("https://www.myntra.com/shoes?rawQuery=shoes")
    await page.locator("//span[@class='myntraweb-sprite sort-downArrow sprites-downArrow']").click();
    const options=await page.locator("//ul[@class='sort-list']/li").all()
    // for(let opt of options){
    //     const text=await opt.textContent()
    //     console.log(text);
        
    // }
    for(let opt of options){
        const text=await opt.textContent()
        if(text?.includes("Popular")){
            await opt.click();
            console.log(text);
            break
        }
    }
})
test.only("autofocus",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator("//input[@id='twotabsearchtextbox']").fill("shoes")
   const search= await page.locator("//div[@class='autocomplete-results-container']/div/div/div").all()
    for(let opt of search){
        const text=await opt.textContent()
        if(text?.includes("woman")){
            await opt.click();
            console.log(text);
            break
        }
    }
})
