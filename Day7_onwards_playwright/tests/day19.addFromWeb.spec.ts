import { test } from '@playwright/test'
import path from 'path'
import excel from 'exceljs'

test('write data to excel', async ({ page }) => {

    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToMultiple?sublist=3")

    const text = await page.locator('.draggable-element').allTextContents()
    console.log(text)

    const workbook = new excel.Workbook()

    await workbook.xlsx.readFile(
        path.join(__dirname, "../testdata/readexcel.xlsx")
    )

    let sheet = workbook.getWorksheet("Sheet8")

    if (!sheet) {
        sheet = workbook.addWorksheet("Sheet8")
    }

    for (let i = 0; i < text.length; i++) {
        sheet.getRow(i + 1).getCell(1).value = text[i]
    }

    await workbook.xlsx.writeFile(
        path.join(__dirname, "../testdata/readexcel.xlsx")
    )

})