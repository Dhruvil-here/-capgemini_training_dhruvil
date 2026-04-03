import { Page, Locator } from '@playwright/test'

export class ShopperStackPage {

    readonly page: Page
    readonly loginBtn: Locator
    readonly emailField: Locator
    readonly passwordField: Locator
    readonly submitLogin: Locator
    readonly searchBox: Locator
    readonly addToCartBtn: Locator
    readonly cartIcon: Locator
    readonly removeBtn: Locator
    readonly quantityDropdown: Locator
    readonly checkoutBtn: Locator

    constructor(page: Page) {

        this.page = page
        this.loginBtn = page.locator('#loginBtn')
        this.emailField = page.locator('#Email')
        this.passwordField = page.locator('#Password')
        this.submitLogin = page.locator('#Login')
        this.searchBox = page.locator('#search')
        this.addToCartBtn = page.getByText('Add To Cart')
        this.cartIcon = page.locator('#cart')
        this.removeBtn = page.getByText('Remove')
        this.quantityDropdown = page.locator('#quantity')
        this.checkoutBtn = page.getByText('Checkout')

    }

    async openWebsite() {
        await this.page.goto("https://www.shoppersstack.com")
    }

    async login(username: string, password: string) {
        await this.loginBtn.click()
        await this.emailField.fill(username)
        await this.passwordField.fill(password)
        await this.submitLogin.click()
    }

    async searchProduct(product: string) {
        await this.searchBox.fill(product)
        await this.page.keyboard.press('Enter')
    }

    async addProductToCart() {
        await this.addToCartBtn.first().click()
    }

    async openCart() {
        await this.cartIcon.click()
    }

    async removeProduct() {
        await this.removeBtn.click()
    }

    async increaseQuantity(quantity: string) {
        await this.quantityDropdown.selectOption(quantity)
    }

    async checkout() {
        await this.checkoutBtn.click()
    }

}