import {test} from "@playwright/test"

test("iFrames1",async({page})=>{

    //!frameLocator()
    await page.goto("https://ui.vision/demo/webtest/frames/")
   const frame= page.frameLocator("//frame[@src='frame_4.html']")
   await frame.locator("//input[@name='mytext4']").fill("Priyanshu")
})
test("iFrames2",async({page})=>{

    //!frame()
    await page.goto("https://ui.vision/demo/webtest/frames/")
    // const val=page.frames()
    // console.log(
    //     val.length

    // );
    // // console.log(val);
    // for(let i of val){
    //     console.log(await i.title());
        
    // }
    // const titlee=await page.title()
    // console.log(titlee);

    //!-------------A1----------------
    const frame1= page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})
    await frame1?.locator("//input[@name='mytext1']").fill("Priyanshu")
    
    
    
})
test.only("iFrames3",async({page})=>{

    //!frameLocator()
    await page.goto("https://ui.vision/demo/webtest/frames/")
   const frame= page.frameLocator("//frame[@src='frame_3.html']").frameLocator("//iframe[@src='https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true']")
   await frame.locator("//label[@for='i6']/div/div").first().click();
})
