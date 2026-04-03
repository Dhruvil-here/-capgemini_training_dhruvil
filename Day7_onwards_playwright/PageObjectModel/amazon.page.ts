import { Page, Locator } from "@playwright/test";

export class AmazonPage {

    readonly page: Page
    readonly searchBox: Locator
    readonly searchButton: Locator
    // readonly ramFilter: Locator
    readonly products: Locator
    // readonly addToCartBtn: Locator
    // readonly quantityDropdown: Locator

    constructor(page: Page) {
        this.page = page
        this.searchBox = page.locator('#twotabsearchtextbox')
        this.searchButton = page.locator('#nav-search-submit-button')
        this.products = page.locator('[data-component-type="s-search-result"]')
    }

    async openAmazon() {
        await this.page.goto("https://www.amazon.in")
    }

    async searchProduct(product: string) {
        await this.searchBox.fill(product)
        await this.searchButton.click()
    }

    async selectRamFilter() {
        await this.page.getByText("10 GB & Above").click()
    }

    async selectProduct(index: number) {
        await this.products.nth(index).click()
    }

    async addToCart() {
        await this.page.locator('#add-to-cart-button').click()
    }

    async changeQuantity(quantity: string) {
        await this.page.locator('#quantity').selectOption(quantity)
    }

}