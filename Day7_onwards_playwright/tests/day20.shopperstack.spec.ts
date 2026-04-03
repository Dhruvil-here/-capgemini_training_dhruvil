import { test, expect } from '@playwright/test'
import { ShopperStackPage } from '../PageObjectModel/ShopperStack.page.ts'
import data from '../testdata/shopperData.json'

test('shopper stack cart flow', async ({ page }) => {
    const shopper = new ShopperStackPage(page)
    await shopper.openWebsite()
    await shopper.login(data.username, data.password)
    await shopper.searchProduct(data.firstProduct)
    await shopper.addProductToCart()
    await shopper.openCart()
    await shopper.removeProduct()
    await shopper.searchProduct(data.secondProduct)
    await shopper.addProductToCart()
    await shopper.openCart()
    await shopper.increaseQuantity(data.quantity)
    await shopper.checkout()

})