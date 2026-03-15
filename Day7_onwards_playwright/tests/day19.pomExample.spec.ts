import { Browser, chromium, test } from "@playwright/test"
import example from "../PageObjectModel/example.page.ts"

test("pom example", async () => {
    const browser: Browser = await chromium.launch({ headless: false })
    const page = await browser.newPage()
    const examplePage = new example(page)

    await page.goto("https://practicetestautomation.com/practice-test-login/")
    // await examplePage.usernameTF.fill("dhruvil")
    await page.waitForTimeout(2000)
    // await examplePage.passwordTF.fill("admin123")
    await page.waitForTimeout(2000)
    await examplePage.submitBtn.click()
    await page.waitForTimeout(2000)
})