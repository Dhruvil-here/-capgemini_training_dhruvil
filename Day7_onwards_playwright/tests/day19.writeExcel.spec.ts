import { test, chromium } from '@playwright/test'
import path from 'path'
import excel from 'exceljs'

test('write data to excel', async ({ page }) => {

    const workbook = new excel.Workbook()

    await workbook.xlsx.readFile(path.join(__dirname, "../testdata/readexcel.xlsx"))

    let sheet = workbook.getWorksheet("Sheet5")

    if (!sheet) {
        sheet = workbook.addWorksheet("Sheet5")
    }

    // sheet.getRow(1).getCell(1).value = "playwright"

    // await workbook.xlsx.writeFile(path.join(__dirname, "../testdata/readexcel.xlsx"))

    const name = ['d', 'h', 'r', 'u', 'v', 'i', 'l']
    for (let i = 0; i < name.length; i++) {
        sheet.getRow(1).getCell(i + 1).value = name[i]
    }
    await workbook.xlsx.writeFile(path.join(__dirname, "../testdata/readexcel.xlsx"))


})