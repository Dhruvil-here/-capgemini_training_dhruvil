import { test, chromium } from '@playwright/test'
import path from 'path'
import fs from 'fs'

test('download file', async () => {
    const browser = await chromium.launch({ headless: false })
    const context = await browser.newContext({ acceptDownloads: true })
    const page = await context.newPage()

    await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0')

    await page.locator('textarea').fill('Playwright Download Test')

    const downloadPromise = page.waitForEvent('download')
    await page.locator('button:has-text("Download")').click()
    const download = await downloadPromise

    const folder = path.join(process.cwd(), 'downloads')
    if (!fs.existsSync(folder)) { fs.mkdirSync(folder) }

    const filePath = path.join(folder, download.suggestedFilename())
    await download.saveAs(filePath)

    console.log(filePath)
    await page.waitForTimeout(3000)
    await browser.close()
})