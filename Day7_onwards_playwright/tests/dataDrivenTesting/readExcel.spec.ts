import { test } from "@playwright/test"
import Excel from "exceljs"
import path from "path"

test("read data from excel", async ({ page }) => {
    const workbook = new Excel.Workbook()

    await workbook.xlsx.readFile(path.join(__dirname, "../../testdata/readexcel.xlsx"))

    const sheet = workbook.getWorksheet("Sheet1")
    const data = sheet?.getRow(1).getCell(1).value
    console.log(data)

    const sheet2 = workbook.getWorksheet("Sheet2")
    for (let i = 1; i <= sheet2!.actualRowCount; i++) {
        for (let j = 1; j <= sheet2!.actualColumnCount; j++) {
            const value = sheet2!.getRow(i).getCell(j).value
            console.log(value)
        }
    }

    const sheet3 = workbook.getWorksheet("Sheet3")
    const name = sheet3?.getRow(2).getCell(2).toString()
    const email = sheet3?.getRow(2).getCell(3).toString()
    const password = sheet3?.getRow(2).getCell(4).toString()
    const url = sheet3?.getRow(2).getCell(1).toString()

    await page.goto(String(url))

    await page.locator("#name").fill(name!)
    await page.locator("#email").fill(email!)
    await page.locator("#password").fill(password!)
    await page.keyboard.press("Enter")
})