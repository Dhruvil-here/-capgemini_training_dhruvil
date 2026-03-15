import { test } from "@playwright/test";
import path from "path";
import fs from 'fs';
// path.join(__dirname,"../../testdata/data.json")
let dataFile = fs.readFileSync(path.join(__dirname, "../../testdata/data.json"))
let data = JSON.parse(dataFile)
// test.only("json data",async({page})=>{
//     // console.log(data.greet);
//     data.forEach(d => {
//         console.log(d.greet);
//     });
// })
test.only("for application", async ({ page }) => {
  // await page.goto(data[0].url)
  // await page.getByLabel("Username").fill(data[0].username)
  // await page.getByLabel("Password").fill(data[0].password)
  // await page.keyboard.press("Enter")
  // await page.waitForTimeout(3000);

  for (let d of data) {
    let url = d.url
    let username = d.username
    let password = d.password

    await page.goto(url)
    console.log(page.title);

  }
})