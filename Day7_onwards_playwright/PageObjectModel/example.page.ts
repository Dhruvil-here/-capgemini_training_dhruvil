class example {
    usernameTF: string
    passwordTF: string
    submitBtn: any

    constructor(page: any) {
        this.usernameTF = page.locator("#username")
        this.passwordTF = page.locator("#password")
        this.submitBtn = page.locator("#submit")
    }
}

export default example