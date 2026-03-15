import {test} from "@playwright/test"

test("alerts",async({page})=>{

    //!page.on()
    page.on("dialog", async dialog => {
        await dialog.accept();           
        
    })
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("//button[@id='confirmBtn']").click();
  
    
   
})

test.only("prompt",async({page})=>{
    //!page.once()
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.once("dialog", async dialog => {
        // await dialog.accept("My name is Priyanshu");      
        if(dialog.type()=="prompt"){
            if(dialog.defaultValue()=="Harry Porter"){
                console.log(dialog.defaultValue());
                
                await dialog.accept()
            }
            else{
                await dialog.accept(dialog.defaultValue());
            }
        }
        else if(dialog.type()=="confirm"){
            await dialog.dismiss();
            console.log(dialog.message());
        }     
        else if(dialog.type()=="alert"){
            await dialog.accept();
            
        }
    })
    await page.locator("//button[@id='promptBtn']").click();
})
    