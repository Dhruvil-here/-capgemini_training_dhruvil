class example {
    usernameTF: string
    passwordTF: string
    submitBtn: any

    constructor(page: any) {
        this.usernameTF = page.locator("#username")
        this.passwordTF = page.locator("#password")
        this.submitBtn = page.locator("#submit")
    }

   async fillUsername(username: string) {
        await this.usernameTF.fill(username)
    }

    async fillPassword(password: string) {
        await this.passwordTF.fill(password)
    }
    async clickSubmit() {
        await this.submitBtn.click()
    }
}

export default example