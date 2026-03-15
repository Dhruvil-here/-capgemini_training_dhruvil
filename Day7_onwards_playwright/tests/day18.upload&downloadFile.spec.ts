import { test, chromium, Browser } from '@playwright/test'
import path from 'path'

test('file upload', async () => {
    const browser: Browser = await chromium.launch({ headless: false })
    const page = await browser.newPage()
    

    //single upload
    await page.goto('https://demoapps.qspiders.com/ui/fileUpload?sublist=0')
    await page.locator('#resume').setInputFiles("E:\\downloads\\WhatsApp Image 2026-03-09 at 10.03.30 PM (3).pdf")
    await page.waitForTimeout(3000)
    //multiple upload
    await page.goto('https://demoapps.qspiders.com/ui/fileUpload/multiple?sublist=3')
    await page.locator('#fileInput')
        .setInputFiles([
            path.join("E:\\downloads\\PLAYWRIGHT WITH JAVASCRIPT(PART B).pdf"),
            path.join("E:\\downloads\\WhatsApp Image 2026-03-09 at 10.03.30 PM (3).pdf")
        ])
    await page.waitForTimeout(3000)

    //deselect file
    await page.locator('#fileInput').setInputFiles([])
    await page.waitForTimeout(3000)
})