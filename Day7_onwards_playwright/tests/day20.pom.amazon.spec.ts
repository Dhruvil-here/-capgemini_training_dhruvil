import { test } from '@playwright/test'
import { AmazonPage } from '../PageObjectModel/amazon.page.ts'
import data from '../testdata/amazon.json'

test('amazon mobile purchase', async ({ page }) => {
    const amazon = new AmazonPage(page)
    await amazon.openAmazon()
    await amazon.searchProduct(data.searchProduct)
    await amazon.selectRamFilter()
    await amazon.selectProduct(data.productIndex)
    const pages = page.context().pages()
    const newPage = pages[1]
    await newPage.locator('#add-to-cart-button').click()
    await newPage.locator('#quantity').selectOption(data.quantity)

})